import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';
import { CharactersServiceFavorites } from '@characters-services/characters-service.favorites';
import { CharactersServiceData } from '@characters-services/characters-service-data';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  iconMenu: boolean = false;
  numberFav: number = 0;
  constructor(
    private _observer: BreakpointObserver,
    private _charSvcFav: CharactersServiceFavorites,
    private _charSvcData: CharactersServiceData
  ) {}
  ngOnInit(): void {
    this._charSvcFav.arrFavorites$.subscribe((res) => {
      this.numberFav = res.length;
    });
  }

  ngAfterViewInit() {
    this._observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.close();
          this.iconMenu = true;
        } else {
          this.sidenav.open();
          this.sidenav.mode = 'side';
          this.iconMenu = false;
        }
      });
  }
  onToogle() {
    this.sidenav.close();
    this.iconMenu = true;
  }
  offToggle() {
    this.sidenav.open();
    this.sidenav.mode = 'side';
    this.iconMenu = false;
  }
  updateChars(): void {
    this._charSvcData.getDataApi();
  }
}
