import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { CanActivateQuiz } from './shared/can-activate-quiz';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'quiz',
    component: QuizComponent,
    canActivate: [ CanActivateQuiz ]
  },
  {
    path: 'summary',
    component: SummaryComponent,
    canActivate: [ CanActivateQuiz ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
