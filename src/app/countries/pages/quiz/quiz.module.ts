import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { AngularmaterialModule } from '../../../shared/angularmaterial/angularmaterial.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './components/results/results.component';
import { QuizSettingsComponent } from './components/settings/quiz-settings.component';
import { MapModule } from './components/map/map.module';
import { IntroQuizComponent } from './components/content-intro/intro-quiz.component';
import { ByWorldModule } from './by-world/by-world.module';
import { LoaderModule } from '../../shared/loader/loader.module';
import { DialogEndQuizComponent } from './components/dialog-end-quiz/dialog-end-quiz.component';
import { ObjToArrayPipe } from '../../shared/pipes/objectToArray.pipe';

@NgModule({
  declarations: [
    QuizComponent,
    QuizSettingsComponent,
    ResultsComponent,
    IntroQuizComponent,
    DialogEndQuizComponent,
    ObjToArrayPipe,
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    AngularmaterialModule,
    ReactiveFormsModule,
    MapModule,
    ByWorldModule,
    LoaderModule,
  ],
})
export class QuizModule {}
