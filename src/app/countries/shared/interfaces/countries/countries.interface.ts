export interface IWorldQuiz {
  itemQuiz: ICountries;
}
export interface ICountries {
  name: Name;
  capital: string[];
  correctAnswer: boolean;
  flags: CoatOfArms;
  region: string;
  subregion: string;
  area: number;
  languages: {};
  population: number;
  currencies: {};
  timezones: string;
  latlng: number[];
  idd: {};
  userAnswer?: boolean;
}
export interface Name {
  common: string;
}
export interface CoatOfArms {
  png: string;
  svg: string;
}
