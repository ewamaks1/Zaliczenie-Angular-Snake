import { Component,EventEmitter,Output,Input} from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { GameInfo, GameStatus } from 'src/app/interfaces';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent {
  @Input() gameInfo: GameInfo;
  @Input() _snake!: NgxSnakeComponent;
  @Input() gameStatus: GameStatus; 
  @Output() public saveStatusEvent = new EventEmitter<GameStatus>();
  @Output() startTimer = new EventEmitter<void>();
  @Output() stopTimer = new EventEmitter<void>();

  constructor() {
    this.gameInfo = {
      playerName: '',
      score: 0,
      timeInTheGame: 0,
    }
    this.gameStatus = {
      isReady: true,
      isGo: false,
      isPaused: false,
      isGameOver: false,
    };
   }

  public onButtonPressed(action: string): void {
    switch (action) {
      case 'start':
        this._snake.actionStart();
        this.gameStatus.isGameOver = false;
        this.gameStatus.isPaused = false;
        this.gameStatus.isGo = true;
        this.gameStatus.isReady = false;
        this.saveStatusEvent.emit(this.gameStatus);
        this.startTimer.emit();
        break;
      case 'stop':
        this._snake.actionStop();
        this.gameStatus.isGameOver = false;
        this.gameStatus.isPaused = true;
        this.gameStatus.isGo = false;
        this.gameStatus.isReady = false;
        this.stopTimer.emit();
        this.saveStatusEvent.emit(this.gameStatus);
        break;
      case 'reset':
        this._snake.actionReset();
        this.gameStatus.isGameOver = false;
        this.gameStatus.isPaused = false;
        this.gameStatus.isGo = false;
        this.gameStatus.isReady = true;
        this.gameInfo.score = 0;
        this.gameInfo.timeInTheGame = 0;
        this.stopTimer.emit();
        this.saveStatusEvent.emit(this.gameStatus);
        break;
      case 'up':
        this._snake.actionUp();
        break;
      case 'right':
        this._snake.actionRight();
        break;
      case 'down':
        this._snake.actionDown();
        break;
      case 'left':
        this._snake.actionLeft();
        break;
    }
  }
}
