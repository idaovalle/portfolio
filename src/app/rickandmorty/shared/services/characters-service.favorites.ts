import { Injectable } from '@angular/core';
import { CharactersResult } from '@characters-interfaces/data-characters.interface';
import { BehaviorSubject } from 'rxjs';

const userFav = 'fav';
@Injectable({
  providedIn: 'root',
})
export class CharactersServiceFavorites {
  private _arrFavoritesSubject = new BehaviorSubject<CharactersResult[]>([]);
  arrFavorites$ = this._arrFavoritesSubject.asObservable();

  constructor() {
    this._initStorage();
  }
  private _initStorage(): void {
    const currentsFav = JSON.parse(localStorage.getItem(userFav)!);
    !currentsFav
      ? localStorage.setItem(userFav, JSON.stringify([]))
      : this.getFav();
  }
  getFav(): CharactersResult[] {
    const arrFav = JSON.parse(localStorage.getItem(userFav)!);
    this._arrFavoritesSubject.next(arrFav);
    return arrFav;
  }
  updateArrFav(character: CharactersResult): void {
    const { id } = character;
    const currentsFav = this.getFav();
    const found = !!currentsFav.find((fav: CharactersResult) => fav.id === id);
    found ? this.delFav(id) : this.addFav(character);
  }
  addFav(character: CharactersResult) {
    const currentsFav = this.getFav();
    localStorage.setItem(userFav, JSON.stringify([...currentsFav, character]));
    this._arrFavoritesSubject.next([...currentsFav, character]);
  }
  delFav(id: string) {
    const currentsFav = this.getFav();
    const characters = currentsFav.filter((item) => item.id !== id);
    localStorage.setItem(userFav, JSON.stringify([...characters]));
    this._arrFavoritesSubject.next([...characters]);
  }
}
