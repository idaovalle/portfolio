import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { CharactersServiceData } from '../../shared/services/characters-service-data';
import { CharactersResult } from '../../shared/interfaces/data-characters.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-characters-search',
  templateUrl: './characters-search.component.html',
  styleUrls: ['./characters-search.component.scss'],
})
export class CharactersSearchComponent implements OnDestroy {
  searchCtrl = new FormControl('');
  private destroy$ = new Subject<unknown>();
  charactersSearch: CharactersResult[] = [];
  term: string = '';

  constructor(private _charDataSvc: CharactersServiceData) {}
  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  searchCharacter(): void {
    //input
    this.searchCtrl.valueChanges
      .pipe(
        map((search) => search.toLowerCase().trim()),
        debounceTime(300),
        distinctUntilChanged(),
        filter((search) => search !== '' && search.length > 2),
        tap((search: string) => this._charDataSvc.filterData(search)),
        map((search) => (this.term = search)),
        takeUntil(this.destroy$)
      )
      .subscribe();
    //Characters
    this._charDataSvc.characters$.subscribe(
      (characters) => (this.charactersSearch = characters)
    );
  }
  onSearchCleaner(): void {
    this._charDataSvc.getDataApi();
    this.searchCtrl.reset();
  }
}
