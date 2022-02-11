import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CountDownService implements OnDestroy {
  private _quizTimer!: number;
  private _countDownSubject = new BehaviorSubject<number>(this._quizTimer);
  private _changeColorSubject = new BehaviorSubject<boolean>(false);
  countDown$ = this._countDownSubject.asObservable();
  changeColor$ = this._changeColorSubject.asObservable();
  private _subCountDown: Subscription = new Subscription();
  private _subChangeColor: Subscription = new Subscription();
  private _counDowntNumber!: number;
  ngOnDestroy(): void {
    this._subCountDown.unsubscribe();
    this._subChangeColor.unsubscribe();
  }

  counterSettings(timeQuiz: number) {
    this._quizTimer = timeQuiz;
    this._countDownSubject.next(this._quizTimer);
  }

  startCounter(): void {
    const timerInterval$ = interval(1000);
    this._subCountDown = timerInterval$
      .pipe(take(this._quizTimer))
      .subscribe((count) => {
        this._counDowntNumber = this._quizTimer - 1 - count;
        this._counDowntNumber === 7 ? this._changeColorTime() : '';
        this._countDownSubject.next(this._counDowntNumber);
      });
  }
  resetCounter() {
    this._subCountDown.unsubscribe();
    if (this._counDowntNumber <= 7) {
      this._subChangeColor.unsubscribe();
    }
    this._countDownSubject.next(this._quizTimer);
    this._changeColorSubject.next(false);
  }

  private _changeColorTime(): void {
    let changeColor: boolean = true;
    const timerInterval$ = interval(1000); //1s
    const countDown$ = timerInterval$.pipe(take(7));
    this._subChangeColor = countDown$.subscribe(() => {
      changeColor ? (changeColor = false) : (changeColor = true);
      this._changeColorSubject.next(changeColor);
    });
  }
}
