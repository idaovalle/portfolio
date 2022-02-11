import { ICountries } from '../countries/countries.interface';

export interface IQuiz {
  question: string;
  flags: string;
  options: ICountries[];
  idItemQuiz: number;
}
export interface IQuizSettings {
  quizTimer: number;
  numberQuestions: number;
  numberOptionsByQuestion: number;
  scoreOptCorrect: number;
  defaultScoreQuiz: number;
}
