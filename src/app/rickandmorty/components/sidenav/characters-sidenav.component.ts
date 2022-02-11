import { Component, Output, EventEmitter } from '@angular/core';
import { CharactersServiceFavorites } from '@characters-services/characters-service.favorites';
import { CharactersServiceData } from '../../shared/services/characters-service-data';

@Component({
  selector: 'app-characters-sidenav',
  templateUrl: './characters-sidenav.component.html',
  styleUrls: ['./characters-sidenav.component.scss'],
})
export class CharactersSidenavComponent {
  @Output() toogle = new EventEmitter();
  numberFav: number = 0;
  constructor(
    private _charSvcFav: CharactersServiceFavorites,
    private _charSvcData: CharactersServiceData
  ) {
    this._charSvcFav.arrFavorites$.subscribe((res) => {
      this.numberFav = res.length;
    });
  }

  onToggle() {
    this.toogle.emit();
  }
  updateChars(): void {
    this._charSvcData.getDataApi();
  }
}
