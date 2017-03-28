import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Question } from './question';

const DUMMY_QUESTIONS = [
  new Question('Lorem 0', ['true', 'false', 'false', 'false'], 0),
  new Question('Lorem 1', ['false', 'true', 'false', 'false'], 1),
  new Question('Lorem 2', ['false', 'false', 'true', 'false'], 2)
];

@Injectable()
export class QuestionsStoreService {

  private cachedQuestions: Question[];

  constructor() { }

  getAll(): Observable<Question> {
    this.cachedQuestions = this.cachedQuestions || DUMMY_QUESTIONS;
    return Observable.from(this.cachedQuestions);
  }

  get(questionIndex: number): Observable<Question> {
    return this.getAll()
      .filter((question, index) => index === questionIndex);
  }

  count(): Observable<number> {
    return this.getAll()
      .count(() => true);
  }

}
