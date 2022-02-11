import { Injectable } from '@angular/core';
import { ICountries } from '@countries-interfaces/countries/countries.interface';
import { IQuiz } from '@countries-interfaces/quiz/quiz-countries.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ByworldCapitalService {
  private _quizWorldbyCapitalsSubject = new BehaviorSubject<IQuiz[]>([]);
  private _loadingQuizSubject = new BehaviorSubject<boolean>(false);
  quizWorldByCapitals$ = this._quizWorldbyCapitalsSubject.asObservable();
  loadingQuiz$ = this._loadingQuizSubject.asObservable();
  private _noItemQuiz: number = 0;

  quiz(
    allCountries: ICountries[],
    numberQuestions: number,
    numberOptionsAnswers: number
  ): void {
    const itemQuiz: ICountries[] = [];
    const arrRandomNumbers: number[] = [];
    let itemQuizOptions: ICountries[] = [];
    let templateQuiz: IQuiz;
    let quiz: IQuiz[] = [];
    this._noItemQuiz = 0;
    this._loadingQuizSubject.next(true);

    //Ramdon Items

    for (let i = 0; i < numberOptionsAnswers * numberQuestions; i++) {
      const randomNumber = Math.floor(Math.random() * allCountries.length);
      const numberIsRepeated = arrRandomNumbers.includes(randomNumber);
      if (numberIsRepeated) {
        i--;
      } else {
        itemQuiz.push(allCountries[randomNumber]);
        arrRandomNumbers.push(randomNumber);
      }
    }
    //Items by group
    for (let i = 0; i < itemQuiz.length; i += numberOptionsAnswers) {
      //Set Questions
      itemQuiz[i].correctAnswer = true;
      //Separate Quiz Items by groups
      itemQuizOptions = itemQuiz.slice(i, i + numberOptionsAnswers);
      itemQuizOptions.sort(() => Math.random() - 0.5);
      //Template Quiz
      templateQuiz = {
        question: itemQuiz[i].name.common,
        flags: itemQuiz[i].flags.png,
        options: itemQuizOptions,
        idItemQuiz: this._noItemQuiz,
      };
      quiz.push(templateQuiz);
      this._noItemQuiz++;
    }

    quiz.length === numberQuestions ? this._loadingQuizSubject.next(false) : '';
    this._quizWorldbyCapitalsSubject.next(quiz);
  }
}
