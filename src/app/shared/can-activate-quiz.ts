import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { GameService } from './game.service';

@Injectable()
export class CanActivateQuiz implements CanActivate {
  constructor(
    private game: GameService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.game.playerName
      .map((name) => {
        const isPlayerDefined = !!name;
        if (!isPlayerDefined) {
          this.router.navigate(['']);
        }
        return isPlayerDefined;
      });
  }
}
