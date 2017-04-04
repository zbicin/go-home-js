import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { GameService, GameStatus } from '../shared/game.service';
import { Question } from '../shared/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public playerName: string;
  private playerNameSubscription: Subscription;
  public question: Question;
  private questionSubscription: Subscription;
  private statusSubscritpion: Subscription;
  public score: number;
  private scoreSubscription: Subscription;

  constructor(
    private game: GameService,
    private router: Router
    ) { }

  giveAnswer(answerIndex: number) {
    this.game.giveAnswer(answerIndex);
  }

  ngOnDestroy() {
    this.playerNameSubscription.unsubscribe();
    this.statusSubscritpion.unsubscribe();
  }

  ngOnInit() {
    this.playerNameSubscription = this.game.playerName.subscribe((playerName: string) => {
      this.playerName = playerName;
    });

    this.questionSubscription = this.game.question.subscribe((question: Question) => {
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

}
