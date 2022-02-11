import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
    children: [
      {
        path: '',
        redirectTo: 'byWorld',
        pathMatch: 'full',
      },
      {
        path: 'byWorld',
        loadChildren: () =>
          import('./by-world/by-world.module').then((m) => m.ByWorldModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
