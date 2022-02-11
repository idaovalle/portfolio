import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ICountries } from '@countries-interfaces/countries/countries.interface';
import { IQuiz } from '@countries-interfaces/quiz/quiz-countries.interface';
import { CountriesService } from '@countries-services/countries.service';
import { CountDownService } from '@countries-services/quiz/settings/count/countdown.service';
import { CustomUserService } from '@countries-services/quiz/settings/custom/custom-user.service';
import { ByworldCapitalService } from '@countries-services/quiz/world/byworld-capital.service';
import { map } from 'rxjs/operators';
import { QuizResultsService } from '../../../shared/services/quiz/results/quiz-results.service';

@Component({
  selector: 'app-by-world',
  templateUrl: './by-world.component.html',
  styleUrls: ['./by-world.component.scss'],
})
export class ByWorldComponent implements OnInit {
  loadingQuiz$ = this._byWorldCapitalSvc.loadingQuiz$;
  private _allCountries: ICountries[] = [];
  quiz: IQuiz[] = [];
  @Output() typeQuiz: EventEmitter<IQuiz[]> = new EventEmitter();
  changeColor$ = this._countDownService.changeColor$;
  @Input() quizTime: boolean = false;
  @Input() reviewTime: boolean = false;
  private _dattaSetings$ = this._customUserSvc.dataSettings$;
  //Data Quiz
  numberQuestions!: number;
  noOptsByQuestion!: number;
  scoreOptCorrect!: number;
  scoreQuiz!: number;
  stepQuiz = 1;
  @Input() dataQuizTimer!: number;
  constructor(
    private _byWorldCapitalSvc: ByworldCapitalService,
    private _countriesSvc: CountriesService,
    private _countDownService: CountDownService,
    private _customUserSvc: CustomUserService,
    private _quizResultsSvc: QuizResultsService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.settingsQuiz();
  }
  settingsQuiz() {
    this._dattaSetings$.subscribe((data) => {
      this.numberQuestions = data.numberQuestions;
      this.noOptsByQuestion = data.numberOptionsByQuestion;
      this.scoreOptCorrect = data.scoreOptCorrect;
      this.scoreQuiz = data.defaultScoreQuiz;
    });
    this.getQuiz();
    this.dataForReport();
    this.startQuiz();
  }
  dataForReport(): void {
    this._quizResultsSvc.dataForReport(
      this.scoreOptCorrect,
      this.scoreQuiz,
      this.dataQuizTimer
    );
  }
  startQuiz(): void {
    this._countriesSvc.allCountries$
      .pipe(map((countries) => (this._allCountries = countries)))
      .subscribe(() => {
        this._allCountries.length > 0
          ? this._byWorldCapitalSvc.quiz(
              this._allCountries,
              this.numberQuestions,
              this.noOptsByQuestion
            )
          : '';
        this.typeQuiz.emit(this.quiz);
      });
  }
  getQuiz(): void {
    this._byWorldCapitalSvc.quizWorldByCapitals$
      .pipe(map((quiz) => (this.quiz = quiz)))
      .subscribe();
  }
  setStepQuiz(index: number) {
    this.stepQuiz = index;
  }
  onOptionAnswer(
    userAnswer: ICountries,
    itemQuiz: IQuiz,
    idItemQuiz: number
  ): void {
    this.stepQuiz++;
    this.scrollControl();
    this._quizResultsSvc.currentScoreQuiz(userAnswer);
    this._quizResultsSvc.dataQuiz(itemQuiz, idItemQuiz);
  }
  skip() {
    this.stepQuiz++;
    this.scrollControl();
  }
  scrollControl(): void {
    const scrollY = window.scrollY;
    const scrollHeight = this.document.documentElement.scrollHeight;
    const scroll = scrollHeight * 0.07;
    this.document.documentElement.scrollTop = scrollY + scroll;
  }
}
