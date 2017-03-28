import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs/Rx';

import { Question } from './question';
import { QuestionsStoreService } from './questions-store.service';

@Injectable()
export class GameService {

  // Decided to make everything Observable. Just for practice.
  // Hope I'm not gonna hate myself. ♪~ ᕕ(ᐛ)ᕗ
  public answerGiven: Subject<number>;
  public answerCorrectness: Observable<boolean>;
  public question: Observable<Question>;
  public questionCount: Observable<number>;
  public questionIndex: Observable<number>;
  public playerName: Subject<string>;
  public score: Observable<number>;
  public status: Observable<GameStatus>;

  constructor(private questionsStore: QuestionsStoreService) {
    this.answerGiven = new Subject();
    this.playerName = new BehaviorSubject(null);

    this.questionCount = Observable.of(0)
      .merge(this.questionsStore.count());

    // this.questionIndex = Observable.of(0)
      // .merge(this.answerGiven)
      // .scan((one, other) =>{
      // console.log(one, other);
      //  return one + other;
      // }, 0);

    // doesnt work dunno why
    this.questionIndex = Observable.of(0)
      .merge(this.answerGiven)
      .count();

      this.questionIndex.subscribe((a) => {
        console.info(a);
      });

    this.status = this.playerName
      .combineLatest(this.questionIndex, this.questionCount, this.determineStatus);

    this.question = this.questionIndex
      .switchMap((currentIndex) => this.questionsStore.get(currentIndex));

    this.answerCorrectness = this.question
      .zip(this.answerGiven, (q, a) => q.isCorrectAnswer(a));

    this.score = Observable.of(0)
      .merge(this.answerCorrectness)
      .map((value) => value ? 1 : 0);
  }

  private determineStatus(name, questionIndex, questionsCount): GameStatus {
    if (!name) {
      return GameStatus.NotStarted;
    }
    else if (questionIndex < questionsCount) {
      return GameStatus.Ongoing;
    }
    else {
      return GameStatus.Finished;
    }
  }

  public giveAnswer(answerIndex: number): void {
    this.answerGiven.next(answerIndex);
  }

  public start(playerName: string): void {
    this.playerName.next(playerName);
  }

}

export enum GameStatus {
  Finished,
  NotStarted,
  Ongoing
}
