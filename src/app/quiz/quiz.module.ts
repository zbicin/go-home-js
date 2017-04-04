import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizComponent } from './quiz.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  declarations: [QuizComponent]
})
export class QuizModule { }
