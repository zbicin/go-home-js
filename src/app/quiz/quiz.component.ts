import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

import { GameService, GameStatus } from '../shared/game.service';
import { Question } from '../shared/question';

@Component({
  selector: 'ghj-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnDestroy, OnInit {
  public isNextQuestionDisabled = true;
  public isSubmitAnswerDisabled = true;
  private nextQuestionClicks = new BehaviorSubject<void>(null);
  public playerName: string;
  private playerNameSubscription: Subscription;
  public question: Question;
  private questionAndNextQuestionClickSubscription: Subscription;
  private selectedAnswerIndex: number;
  private statusSubscritpion: Subscription;
  public score: number;
  private scoreSubscription: Subscription;

  constructor(
    private game: GameService,
    private router: Router
  ) { }

  get isAnswerBoxDisabled(): boolean {
    return !this.isNextQuestionDisabled;
  }

  nextQuestion() {
    this.isNextQuestionDisabled = true;
    this.nextQuestionClicks.next(null);
    this.selectedAnswerIndex = null;
  }

  ngOnDestroy() {
    this.playerNameSubscription.unsubscribe();
    this.questionAndNextQuestionClickSubscription.unsubscribe();
    this.scoreSubscription.unsubscribe();
    this.statusSubscritpion.unsubscribe();
  }

  ngOnInit() {
    this.playerNameSubscription = this.game.playerName.subscribe((playerName: string) => {
      this.playerName = playerName;
    });

    this.questionAndNextQuestionClickSubscription = this.game.question
      .zip(this.nextQuestionClicks, (question: Question) => question)
      .subscribe((question: Question) => {
        this.question = question;
      });

    this.statusSubscritpion = this.game.status.subscribe((gameStatus: GameStatus) => {
      if (gameStatus === GameStatus.Finished) {
        // this.router.navigate(['summary']);
      }
    });

    this.scoreSubscription = this.game.score.subscribe((score: number) => {
      this.score = score;
    });
  }

  selectAnswer(answerIndex: number) {
    this.selectedAnswerIndex = answerIndex;
    this.isSubmitAnswerDisabled = false;
  }

  submitAnswer() {
    this.game.giveAnswer(this.selectedAnswerIndex);
    this.isNextQuestionDisabled = false;
    this.isSubmitAnswerDisabled = true;
  }

}
