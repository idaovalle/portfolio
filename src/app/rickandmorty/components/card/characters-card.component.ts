import { Component, Input, ViewChild } from '@angular/core';
import { CharactersResult } from '@characters-interfaces/data-characters.interface';
import { CharactersServiceFavorites } from '@characters-services/characters-service.favorites';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss'],
})
export class CharactersCardComponent {
  @Input() character!: CharactersResult;
  @ViewChild('addFavSnackBar') addFavSnackBar: any;
  @ViewChild('delFavSnackBar') delFavSnackBar: any;
  constructor(
    private _charSvcFav: CharactersServiceFavorites,
    private _snackBar: MatSnackBar
  ) {}

  onFavorite(): void {
    const isFav = this.character.favorite;
    this.character.favorite = !isFav;
    this._charSvcFav.updateArrFav(this.character);
    if (!this.character.favorite) {
      this._snackBar.openFromTemplate(this.delFavSnackBar, {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        duration: 2500,
      });
    } else {
      this._snackBar.openFromTemplate(this.addFavSnackBar, {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        duration: 2500,
      });
    }
  }
}
