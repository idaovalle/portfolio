import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesWrapperComponent } from './wrapper/countries-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesWrapperComponent,

    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/countries-home/countries-home.module').then(
            (m) => m.CountriesHomeModule
          ),
      },
      {
        path: 'quiz',
        loadChildren: () =>
          import('./pages/quiz/quiz.module').then((m) => m.QuizModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
