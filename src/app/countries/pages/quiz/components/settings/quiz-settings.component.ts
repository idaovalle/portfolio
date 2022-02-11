import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IQuizSettings } from '@countries-interfaces/quiz/quiz-countries.interface';

@Component({
  selector: 'app-quiz-settings',
  templateUrl: './quiz-settings.component.html',
  styleUrls: ['./quiz-settings.component.scss'],
})
export class QuizSettingsComponent {
  constructor(
    public dialogRef: MatDialogRef<QuizSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public dataSettings: IQuizSettings
  ) {}
}
