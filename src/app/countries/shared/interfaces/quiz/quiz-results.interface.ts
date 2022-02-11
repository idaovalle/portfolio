import { ICountries } from '@countries-interfaces/countries/countries.interface';

export interface IQuizResult {
  quizReport: IQuizReport;
  quizReview: IQuizReviewItem[];
}
export interface IQuizReport {
  scoreQuiz: number;
  noCorrectAnswer: number;
  noIncorrectAnswer: number;
  timer: number;
}
export interface IQuizReview {
  idItem: number;
  itemQuizReview: IQuizReviewItem;
}
export interface IQuizReviewItem {
  selectedAnswer: ICountries;
  correctAnswer: ICountries;
}
export interface ILatLngMap {
  lat: number;
  lng: number;
}
