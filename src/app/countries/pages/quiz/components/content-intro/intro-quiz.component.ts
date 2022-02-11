import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-quiz',
  templateUrl: './intro-quiz.component.html',
  styleUrls: ['./intro-quiz.component.scss'],
})
export class IntroQuizComponent implements OnInit {
  @Input() numberQuestions: number = 0;
  @Input() scoreForAnswerCorrect: number = 0;
  @Input() dataQuizTimer: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
