import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, pluck, take, tap, withLatestFrom } from 'rxjs/operators';
import { CharactersServiceFavorites } from './characters-service.favorites';
import {
  CharactersResult,
  Data,
} from '@characters-interfaces/data-characters.interface';

const QUERY = gql`
  {
    episodes {
      results {
        name
        episode
      }
    }
    characters {
      results {
        id
        name
        status
        species
        gender
        image
        created
      }
    }
  }
`;
@Injectable({
  providedIn: 'root',
})
export class CharactersServiceData {
  private _charactersSubject = new BehaviorSubject<CharactersResult[]>([]);
  characters$ = this._charactersSubject.asObservable();
  constructor(
    private _apollo: Apollo,
    private charactersSvcFav: CharactersServiceFavorites
  ) {
    this.getDataApi();
  }
  getDataApi(): void {
    this._apollo
      .watchQuery<Data>({
        query: QUERY,
      })
      .valueChanges.pipe(
        take(1),
        tap(({ data }) => {
          const { characters } = data;
          this.parseCharactersData(characters.results);
        })
      )
      .subscribe();
  }
  getCharByPage(numberPage: number) {
    const QUERY_BY_PAGE = gql`
    {
      characters(page:${numberPage}) {
        results {
          id
          name
            status
            species
            gender
            image
            created
          }
        }
      }
    `;

    this._apollo
      .watchQuery<Data>({
        query: QUERY_BY_PAGE,
      })
      .valueChanges.pipe(
        take(1),
        pluck('data', 'characters'),
        withLatestFrom(this.characters$),
        tap(([apiResponse, characters]) => {
          this.parseCharactersData([...characters, ...apiResponse.results]);
        })
      )
      .subscribe();
  }

  filterData(valueToSearch: string): void {
    //
    const QUERY_BY_NAME = gql`
      query ($name: String) {
        characters(filter: { name: $name }) {
          info {
            count
          }
          results {
            id
            name
            status
            species
            gender
            image
            created
          }
        }
      }
    `;

    this._apollo
      .watchQuery<any>({
        query: QUERY_BY_NAME,
        variables: {
          name: valueToSearch,
        },
      })
      .valueChanges.pipe(
        take(1),
        pluck('data', 'characters'),
        tap((apiResponse) =>
          this.parseCharactersData([...apiResponse.results])
        ),
        catchError((error) => {
          console.log(error.message);
          this._charactersSubject.next([]);
          return of(error);
        })
      )
      .subscribe();
  }
  private parseCharactersData(characters: CharactersResult[]): void {
    const currentFavs = this.charactersSvcFav.getFav();
    const newData = characters.map((character) => {
      const found = !!currentFavs.find(
        (fav: CharactersResult) => fav.id === character.id
      );
      return { ...character, favorite: found };
    });
    this._charactersSubject.next(newData);
  }
}
