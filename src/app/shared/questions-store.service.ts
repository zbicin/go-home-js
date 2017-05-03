declare const require: any;

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Question } from './question';
const QUESTIONS = require('./questions.json').map(Question.fromJson).slice(0, 2);

const DUMMY_QUESTIONS = [
  new Question('Lorem 0', ['true', 'false', 'false', 'false'], 0),
  new Question('Lorem 1', ['false', 'true', 'false', 'false'], 1),
  new Question('Lorem 2', ['false', 'false', 'true', 'false'], 2)
];

@Injectable()
export class QuestionsStoreService {

  private cachedQuestions: Question[];

  constructor() {
    console.log('QuestionsStore constructor');
  }

  getAll(): Observable<Question[]> {
    this.cachedQuestions = this.cachedQuestions || QUESTIONS;
    return Observable.of(this.cachedQuestions);
  }

  get(questionIndex: number): Observable<Question> {
    const indexComparator = (q: Question, index: number) => index === questionIndex;
    const narrowToSingle = (questions: Question[]) => questions.find(indexComparator);

    return this.getAll()
      .map(narrowToSingle);
  }

  count(): Observable<number> {
    return this.getAll()
      .map((questions: Question[]) => {
        return questions.length;
      });
  }

}
