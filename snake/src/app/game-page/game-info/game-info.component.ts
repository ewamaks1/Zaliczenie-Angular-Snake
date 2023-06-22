import { Component, Input } from '@angular/core';
import { GameInfo, GameStatus } from 'src/app/interfaces';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent {
  @Input() gameInfo: GameInfo;
  @Input() gameStatus: GameStatus;

  constructor() {
    this.gameStatus = {
      isReady: true,
      isGo: false,
      isPaused: false,
      isGameOver: false,
    };
    this.gameInfo = {
      playerName: '',
      score: 0,
      timeInTheGame: 0,
    };
  }
}
