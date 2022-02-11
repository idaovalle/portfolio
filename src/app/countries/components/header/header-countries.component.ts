import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-countries',
  templateUrl: './header-countries.component.html',
  styleUrls: ['./header-countries.component.scss'],
})
export class HeaderCountriesComponent implements OnInit {
  @Output() toggle = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  onToggle() {
    this.toggle.emit();
  }
}
