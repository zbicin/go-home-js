import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { GameService, GameStatus } from './game.service';
import { QuestionsStoreService } from './questions-store.service';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService, QuestionsStoreService]
    });
  });

  it('should ...', inject([GameService], (service: GameService) => {
    let log = (what: string) => {
      return (whatever) => {
        console.log(`${what.toUpperCase()}: ${whatever}`);
      }
    }

    // service.questionCount.subscribe(log('questionCount'));
    // service.questionIndex.subscribe(log('questionIndex'));
    // service.answerGiven.subscribe(log('answerGiven'));
    // service.answerCorrectness.subscribe(log('answerResult'));
    // service.question.subscribe(log('currentQuestion'));
    // service.playerName.subscribe(log('playerName'));
    // service.score.subscribe(log('score'));
    service.status.subscribe((status) => {
      console.log(`STATUS: ${GameStatus[status]}`);
    });

    service.start('John Doe');
    // service.giveAnswer(1);
    // service.giveAnswer(1);
    // service.giveAnswer(1);

    expect(service).toBeTruthy();
  }));
});
