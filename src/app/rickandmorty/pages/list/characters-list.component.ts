import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { CharactersServiceData } from '@characters-services/characters-service-data';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  characters$ = this._dataService.characters$;
  private _pageNumber = 1;
  showArrow: boolean = false;
  constructor(
    private _dataService: CharactersServiceData,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  onScrolled() {
    this._pageNumber++;
    this._dataService.getCharByPage(this._pageNumber);
  }
  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this._document.documentElement.scrollTop;
    this.showArrow = (yOffSet || scrollTop) > 500;
  }
  onScrollTop(): void {
    this._document.documentElement.scrollTop = 0;
  }
}
