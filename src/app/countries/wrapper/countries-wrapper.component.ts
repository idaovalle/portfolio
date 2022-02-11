import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-countries-wrapper',
  templateUrl: './countries-wrapper.component.html',
  styleUrls: ['./countries-wrapper.component.scss'],
})
export class CountriesWrapperComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor() {}

  ngOnInit(): void {}
  onToggle() {
    this.sidenav.toggle();
    this.sidenav.mode = 'side';
  }
}
