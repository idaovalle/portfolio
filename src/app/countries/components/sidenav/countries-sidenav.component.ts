import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countries-sidenav',
  templateUrl: './countries-sidenav.component.html',
  styleUrls: ['./countries-sidenav.component.scss'],
})
export class CountriesSidenavComponent implements OnInit {
  @Output() toggle = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  onToggle() {
    this.toggle.emit(true);
  }
}
