import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanActivateQuiz } from './can-activate-quiz';
import { GameService } from './game.service';
import { QuestionsStoreService } from './questions-store.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CanActivateQuiz, GameService, QuestionsStoreService]
})
export class SharedModule { }
