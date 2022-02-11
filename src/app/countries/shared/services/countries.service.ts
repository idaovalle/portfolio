import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { ICountries } from '@countries-interfaces/countries/countries.interface';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _API = environment.API;
  private _allCountries: ICountries[] = [];
  private _allCountriesSubject = new BehaviorSubject<ICountries[]>([]);
  allCountries$ = this._allCountriesSubject.asObservable();
  private _loadingCountriesSubject = new BehaviorSubject<boolean>(true);
  loadingCountries$ = this._loadingCountriesSubject.asObservable();

  constructor(private _http: HttpClient) {
    this._getCountries();
  }
  private _getCountries(): void {
    this._http
      .get<ICountries[]>(`${this._API}/all`)
      .pipe(
        take(1),
        map((countries) => {
          countries.map((res) => {
            let capitalsCountries = res.capital;
            capitalsCountries === undefined
              ? (capitalsCountries = ['Unknown'])
              : '';
            this._allCountries.push({
              name: res.name,
              capital: capitalsCountries,
              correctAnswer: false,
              flags: res.flags,
              region: res.region,
              subregion: res.subregion,
              languages: res.languages,
              population: res.population,
              currencies: res.currencies,
              timezones: res.timezones,
              area: res.area,
              latlng: res.latlng,
              idd: res.idd,
            });
          });
          this._allCountries.length > 0
            ? this._loadingCountriesSubject.next(false)
            : '';
          this._allCountriesSubject.next(this._allCountries);
        })
      )
      .subscribe();
  }
}
