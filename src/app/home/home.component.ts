import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { GameService, GameStatus } from '../shared/game.service';

@Component({
  selector: 'ghj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy, OnInit {

  private statusSubscritpion: Subscription;

  constructor(
    private game: GameService,
    private router: Router
  ) { }

  ngOnDestroy() {
    this.statusSubscritpion.unsubscribe();
  }

  ngOnInit() {
    this.statusSubscritpion = this.game.status.subscribe((gameStatus: GameStatus) => {
      if (gameStatus === GameStatus.Ongoing) {
        this.router.navigate(['quiz']);
      }
    });
  }

  onLogin(playerName: string) {
    this.game.start(playerName);
    this.router.navigate(['quiz']);
  }

}
