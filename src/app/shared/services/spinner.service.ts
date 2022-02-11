import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  loading$ = new Subject<boolean>();
  show(): void {
    this.loading$.next(true);
  }
  hide(): void {
    this.loading$.next(false);
  }
}
