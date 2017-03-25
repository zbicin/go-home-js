import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerBoxComponent } from './answer-box/answer-box.component';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { QuizNavigationComponent } from './quiz-navigation/quiz-navigation.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnswerBoxComponent, QuestionBoxComponent, QuizNavigationComponent, ToastComponent],
  exports: [AnswerBoxComponent, QuestionBoxComponent, QuizNavigationComponent, ToastComponent]
})
export class UiModule { }
