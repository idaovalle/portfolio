import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICountries } from '@countries-interfaces/countries/countries.interface';
import { IQuizSettings } from '@countries-interfaces/quiz/quiz-countries.interface';
import { DefaultSetQuiz } from '@countries-services/quiz/settings/default-settings-quiz';
import { QuizSettingsComponent } from '@countries-quiz/components/settings/quiz-settings.component';
import { CountriesService } from '@countries-services/countries.service';
import { ByworldCapitalService } from '@countries-services/quiz/world/byworld-capital.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountDownService } from '../count/countdown.service';
const defaultData: IQuizSettings = {
  quizTimer: DefaultSetQuiz.defaultQuizTimer,
  numberQuestions: DefaultSetQuiz.defaultNoQuestions,
  numberOptionsByQuestion: DefaultSetQuiz.defaultNoOptsByQuestion,
  scoreOptCorrect: DefaultSetQuiz.defaultScoreOptCorrect,
  defaultScoreQuiz: DefaultSetQuiz.defaultScoreQuiz,
};
@Injectable({
  providedIn: 'root',
})
export class CustomUserService implements OnDestroy {
  private _dataSettingsSubject = new BehaviorSubject<IQuizSettings>(
    defaultData
  );
  dataSettings$ = this._dataSettingsSubject.asObservable();
  private _subAllCountries: Subscription = new Subscription();
  private _numberQuestions = defaultData.numberQuestions;
  private _numberOptionsByQuestion = defaultData.numberOptionsByQuestion;
  private _defaultScoreQuiz = defaultData.defaultScoreQuiz;
  private _quizTimer = defaultData.quizTimer;
  constructor(
    private _dialogSettings: MatDialog,
    private _countdownSvc: CountDownService,
    private _countriesSvc: CountriesService,
    private _byWorldCapitalSvc: ByworldCapitalService
  ) {}
  ngOnDestroy(): void {
    this._subAllCountries.unsubscribe();
  }
  settings(): void {
    const dialogSettingsRef = this._dialogSettings.open(QuizSettingsComponent, {
      panelClass: 'countries-dialog',
      data: {
        quizTimer: this._quizTimer.toString(),
        numberQuestions: this._numberQuestions.toString(),
        numberOptionsByQuestion: this._numberOptionsByQuestion.toString(),
      },
    });
    dialogSettingsRef.afterClosed().subscribe((result: IQuizSettings) => {
      if (result !== undefined) {
        this._quizTimer = Number(result.quizTimer);
        this._countdownSvc.counterSettings(this._quizTimer);
        this._numberQuestions = Number(result.numberQuestions);
        this._numberOptionsByQuestion = Number(result.numberOptionsByQuestion);
        const dataSettings: IQuizSettings = {
          quizTimer: this._quizTimer,
          numberQuestions: this._numberQuestions,
          numberOptionsByQuestion: this._numberOptionsByQuestion,
          defaultScoreQuiz: this._defaultScoreQuiz,
          scoreOptCorrect: this._defaultScoreQuiz / this._numberQuestions,
        };
        this._dataSettingsSubject.next(dataSettings);
        this.resetQuiz();
      }
    });
  }
  resetQuiz(): void {
    let allCountries: ICountries[] = [];
    this._subAllCountries = this._countriesSvc.allCountries$
      .pipe(map((countries) => (allCountries = countries)))
      .subscribe();
    this._byWorldCapitalSvc.quiz(
      allCountries,
      this._numberQuestions,
      this._numberOptionsByQuestion
    );
  }
}
