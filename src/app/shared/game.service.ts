import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject,  Subject } from 'rxjs/Rx';

import { Question } from './question';
import { QuestionsStoreService } from './questions-store.service';

const dumpValue = (key: string) => {
  return (value: any) => {
    const enableDumping = true;

    if (enableDumping) {
      console.info(key, value);
    }
  };
};

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
    console.log('GameService constructor');
    this.answerGiven = new Subject();
    this.playerName = new BehaviorSubject(null);

    this.questionCount = Observable.of(0)
      .merge(this.questionsStore.count())
      .do(dumpValue('questionCount'));

    this.questionIndex = Observable.of(0)
      .merge(this.answerGiven)
      .scan((acc, currentValue, index) => index, 0)
      .do(dumpValue('questionIndex'));

    this.status = this.playerName
      .combineLatest(this.questionIndex, this.questionCount, this.determineStatus)
      .do(dumpValue('status'));

    this.question = this.questionIndex
      .switchMap((currentIndex) => this.questionsStore.get(currentIndex))
      .do(dumpValue('question'));

    this.answerCorrectness = this.question
      .zip(this.answerGiven, (q, a) => q.isCorrectAnswer(a))
      .do(dumpValue('answerCorrectness'));

    this.score = Observable.of(0)
      .merge(this.answerCorrectness)
      .map((value) => value ? 1 : 0)
      .scan((acc, currentValue, index) => acc + currentValue, 0)
      .do(dumpValue('score'));
  }

  private determineStatus(name, questionIndex, questionsCount): GameStatus {
    if (!name) {
      return GameStatus.NotStarted;
    } else if (questionIndex < questionsCount) {
      return GameStatus.Ongoing;
    } else {
      return GameStatus.Finished;
    }
  }

  public giveAnswer(answerIndex: number): void {
    dumpValue('giveAnswer')(answerIndex);
    this.answerGiven.next(answerIndex);
  }

  public start(playerName: string): void {
    dumpValue('start')(playerName);
    this.playerName.next(playerName);
  }

}

export enum GameStatus {
  Finished,
  NotStarted,
  Ongoing
}
