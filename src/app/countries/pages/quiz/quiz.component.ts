import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEndQuizComponent } from './components/dialog-end-quiz/dialog-end-quiz.component';
import { MatExpansionPanel } from '@angular/material/expansion';
import { CountDownService } from '@countries-services/quiz/settings/count/countdown.service';
import { CountriesService } from '@countries-services/countries.service';
import { CustomUserService } from '@countries-services/quiz/settings/custom/custom-user.service';
import { timer, Subscription } from 'rxjs';
import { QuizResultsService } from '../../shared/services/quiz/results/quiz-results.service';
import { IQuiz } from '../../shared/interfaces/quiz/quiz-countries.interface';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit, OnDestroy {
  loadingCountries$ = this._countriesSvc.loadingCountries$; //loader
  private _dattaSetings$ = this._customUserSvc.dataSettings$; //settings
  @ViewChild(MatExpansionPanel) expansionPanel!: MatExpansionPanel; //Panel
  stepQuiz = 0;
  preQuizTime: boolean = true;
  quizTime: boolean = false;
  reviewTime: boolean = false;
  dataQuizTimer!: number;
  quizTimer!: number;
  scoreForAnswerCorrect!: number;
  numberQuestions!: number;
  scoreQuiz!: number;
  typeQuiz!: IQuiz[];
  subTimeUp: Subscription = new Subscription();
  private _subscription: Subscription = new Subscription();

  constructor(
    private _dialogSettings: MatDialog,
    private _countdownSvc: CountDownService,
    private _countriesSvc: CountriesService,
    private _customUserSvc: CustomUserService,
    private _quizResultsSvc: QuizResultsService
  ) {}
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
    this.subTimeUp.unsubscribe();
  }
  ngOnInit(): void {
    this.getCountries();
    this.dataSettings();
  }
  getCountries() {
    this._countriesSvc.allCountries$;
  }

  dataSettings(): void {
    this._subscription.add(
      this._dattaSetings$.subscribe((data) => {
        this.numberQuestions = data.numberQuestions;
        this.scoreForAnswerCorrect = data.scoreOptCorrect;
        this._countdownSvc.counterSettings(data.quizTimer);
        this.dataQuizTimer = data.quizTimer;
        this.scoreQuiz = data.defaultScoreQuiz;
      })
    );
    this._subscription.add(
      this._countdownSvc.countDown$.subscribe(
        (timer) => (this.quizTimer = timer)
      )
    );
  }
  settingsQuiz(): void {
    this._customUserSvc.settings();
    this.expansionPanel.open();
    this.resetQuiz();
    this._quizResultsSvc.resetResults();
  }
  resetQuiz(): void {
    this._customUserSvc.resetQuiz();
  }
  setStepQuiz(index: number) {
    this.stepQuiz = index;
  }
  firstStepQuiz() {
    this._countdownSvc.startCounter();
    this.stepQuiz++;
    this.quizTime = true;
    this.subTimeUp = timer(this.quizTimer * 1000).subscribe(() => {
      this.reviewTime = true;
      this.quizTime = false;
      this._countdownSvc.resetCounter();
    });
  }
  endQuiz(): void {
    const dialogSettingsRef = this._dialogSettings.open(
      DialogEndQuizComponent,
      { panelClass: 'countries-dialog' }
    );
    dialogSettingsRef.afterClosed().subscribe((result) => {
      if (result !== '') {
        this._quizResultsSvc.validateQuizItems(this.typeQuiz);
        this.reviewTime = true;
        this.quizTime = false;
        this._countdownSvc.resetCounter();
        this.subTimeUp.unsubscribe();
      }
    });
  }
  resetAll() {
    this.reviewTime = false;
    this.expansionPanel.open();
    this._quizResultsSvc.resetResults();
    this.resetQuiz();
  }
  setTypeQuiz($event: IQuiz[]) {
    this.typeQuiz = $event;
  }
}
