import { Component, OnInit } from '@angular/core';
import { ICountries } from '@countries-interfaces/countries/countries.interface';
import {
  ILatLngMap,
  IQuizReport,
  IQuizReviewItem,
} from '@countries-interfaces/quiz/quiz-results.interface';
import { QuizResultsService } from '@countries-services/quiz/results/quiz-results.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  quizReport!: IQuizReport;
  quizReview!: IQuizReviewItem[];
  correctAnswer!: ICountries;
  selectedAnswer!: ICountries;
  arrLatLngItem: ILatLngMap[] = [];
  lngLat!: ILatLngMap;
  constructor(private _quizResultsSvc: QuizResultsService) {}
  ngOnInit(): void {
    this.getResults();
    this.getLngLat();
  }

  getResults(): void {
    this._quizResultsSvc.quizResult$
      .pipe(
        take(1),
        map((results) => {
          this.quizReport = results.quizReport;
          this.quizReview = results.quizReview;
          this.correctAnswer = results.quizReview[0].correctAnswer;
          this.selectedAnswer = results.quizReview[0].selectedAnswer;
        })
      )
      .subscribe();
  }
  getLngLat(): void {
    this.quizReview.map((item) => {
      let latLng = {
        lat: item.correctAnswer.latlng[0],
        lng: item.correctAnswer.latlng[1],
      };
      this.arrLatLngItem.push(latLng);
    });
  }

  onReview(country: IQuizReviewItem, lat: number, lng: number): void {
    this.correctAnswer = country.correctAnswer;
    this.selectedAnswer = country.selectedAnswer;
    this.lngLat = {
      lat: lat,
      lng: lng,
    };
  }
}
