import { Component, OnInit } from '@angular/core';
import { CharactersResult } from '@characters-interfaces/data-characters.interface';
import { CharactersServiceFavorites } from '@characters-services/characters-service.favorites';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './characters-favorites.component.html',
  styleUrls: ['./characters-favorites.component.scss'],
})
export class CharactersFavoritesComponent implements OnInit {
  get listFavorites$(): Observable<CharactersResult[]> {
    return this._charactersSvcFavorites.arrFavorites$;
  }
  showFavorites!: boolean;

  constructor(private _charactersSvcFavorites: CharactersServiceFavorites) {}

  ngOnInit(): void {
    this.checkArrFav();
  }
  checkArrFav() {
    this.listFavorites$.subscribe((res) => {
      res.length > 0
        ? (this.showFavorites = true)
        : (this.showFavorites = false);
    });
  }
}
