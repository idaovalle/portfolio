import { Injectable, OnDestroy, Pipe } from '@angular/core';
import { ICountries } from '@countries-interfaces/countries/countries.interface';
import { IQuiz } from '@countries-interfaces/quiz/quiz-countries.interface';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CustomUserService } from '@countries-services/quiz/settings/custom/custom-user.service';
import {
  IQuizReport,
  IQuizResult,
  IQuizReview,
  IQuizReviewItem,
} from '../../../interfaces/quiz/quiz-results.interface';

@Injectable({
  providedIn: 'root',
})
export class QuizResultsService implements OnDestroy {
  private _quizResult!: IQuizResult;
  private _quizResultSubject = new BehaviorSubject<IQuizResult>(
    this._quizResult
  );
  quizResult$ = this._quizResultSubject.asObservable();
  private _subDataSettings: Subscription = new Subscription();
  private _quizReview: IQuizReviewItem[] = [];
  private _scoreQuiz!: number;
  private _scoreOptCorrect!: number;
  private _dataQuizTimer!: number;
  private _noCorrectAnswer: number = 0;
  private _noIncorrectAnswer: number = 0;
  private _arrItemQuizReview: IQuizReview[] = [];
  private _itemQuiz!: IQuizReview;
  private _quizReport!: IQuizReport;
  private _userAnswer!: ICountries;
  constructor(private _customUserSvc: CustomUserService) {}
  ngOnDestroy(): void {
    this._subDataSettings.unsubscribe();
  }

  currentScoreQuiz(userAnswer: ICountries): void {
    this._userAnswer = userAnswer;
    if (!userAnswer.correctAnswer) {
      this._scoreQuiz = this._scoreQuiz - this._scoreOptCorrect;
      this._noIncorrectAnswer = this._noIncorrectAnswer + 1;
    } else {
      this._noCorrectAnswer = this._noCorrectAnswer + 1;
    }
  }
  dataQuiz(itemQuiz: IQuiz, idItemQuiz: number): void {
    const findMatchesIdItems = this._arrItemQuizReview.find(
      (item) => idItemQuiz === item.idItem
    );
    if (findMatchesIdItems !== undefined) {
      this._quizReview[idItemQuiz].selectedAnswer = this._userAnswer;
    } else {
      let correctOpt = itemQuiz.options.filter(
        (correctOpt) => correctOpt.correctAnswer === true
      );
      this._quizReport = {
        scoreQuiz: this._scoreQuiz,
        noCorrectAnswer: this._noCorrectAnswer,
        noIncorrectAnswer: this._noIncorrectAnswer,
        timer: this._dataQuizTimer,
      };
      let optionQuizReview: IQuizReviewItem = {
        selectedAnswer: this._userAnswer,
        correctAnswer: correctOpt[0],
      };
      this._itemQuiz = {
        idItem: idItemQuiz,
        itemQuizReview: optionQuizReview,
      };
      this._arrItemQuizReview.push(this._itemQuiz);
      this._quizReview.push(optionQuizReview);

      this._quizResult = {
        quizReport: this._quizReport,
        quizReview: this._quizReview,
      };
      this._quizResultSubject.next(this._quizResult);
    }
  }
  dataForReport(
    scoreOptCorrect: number,
    scoreQuiz: number,
    dataQuizTimer: number
  ) {
    this._scoreQuiz = scoreQuiz;
    this._scoreOptCorrect = scoreOptCorrect;
    this._dataQuizTimer = dataQuizTimer;
  }

  resetResults(): void {
    this._quizReview = [];
    this._noCorrectAnswer = 0;
    this._noIncorrectAnswer = 0;
    this._arrItemQuizReview = [];
    this._subDataSettings = this._customUserSvc.dataSettings$.subscribe(
      (data) => {
        this._scoreQuiz = data.defaultScoreQuiz;
        this._scoreOptCorrect = data.scoreOptCorrect;
      }
    );
  }
  validateQuizItems(quiz: IQuiz[]): void {
    let selectedIdItems: number[] = [];
    let quizIdItems: number[] = [];
    let idItemMissing: number[] = [];
    if (this._arrItemQuizReview.length < quiz.length) {
      this._arrItemQuizReview.map((item) => selectedIdItems.push(item.idItem));
      quiz.map((item) => quizIdItems.push(item.idItemQuiz));
      quizIdItems.map((numberItems) =>
        !selectedIdItems.includes(numberItems)
          ? idItemMissing.push(numberItems)
          : ''
      );

      idItemMissing.map((idItem) => {
        let optionQuizReview: IQuizReviewItem = {
          selectedAnswer: quiz[idItem].options[idItem],
          correctAnswer: quiz[idItem].options[idItem],
        };
        optionQuizReview.selectedAnswer.userAnswer = true;
        this._quizReview.splice(idItem, 0, optionQuizReview);
      });

      if (idItemMissing.length === quiz.length) {
        this._noCorrectAnswer = 0;
        this._noIncorrectAnswer = 0;
        this._scoreQuiz = 0;
      } else {
        this._scoreQuiz =
          this._scoreQuiz - idItemMissing.length * this._scoreOptCorrect;
      }
      this._quizReport = {
        scoreQuiz: this._scoreQuiz,
        noCorrectAnswer: this._noCorrectAnswer,
        noIncorrectAnswer: this._noIncorrectAnswer,
        timer: this._dataQuizTimer,
      };
      this._quizResult = {
        quizReport: this._quizReport,
        quizReview: this._quizReview,
      };
      this._quizResultSubject.next(this._quizResult);
    }
  }
}
