import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { GameService } from '../shared/game.service';

@Component({
  selector: 'ghj-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnDestroy, OnInit {

  public name: string;
  private nameSubscription: Subscription;
  public score: number;
  private scoreSubscription: Subscription;

  constructor(private game: GameService) { }

  ngOnDestroy() {
    this.nameSubscription.unsubscribe();
    this.scoreSubscription.unsubscribe();
  }

  ngOnInit() {
    this.nameSubscription = this.game.playerName.subscribe((name: string) => {
      this.name = name;
    });

    this.scoreSubscription = this.game.score.subscribe((score: number) => {
      this.score = score;
    });
  }

}
