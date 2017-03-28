import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnswerBoxComponent } from './answer-box/answer-box.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { QuizNavigationComponent } from './quiz-navigation/quiz-navigation.component';
import { ToastComponent } from './toast/toast.component';

const COMPONENTS = [
  AnswerBoxComponent,
  LoginFormComponent,
  QuestionBoxComponent,
  QuizNavigationComponent,
  ToastComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class UiModule { }
