import { Component, OnInit, ViewChild } from '@angular/core';
import { Player, GameInfo, GameStatus, Scores } from 'src/app/interfaces';
import { NgxSnakeComponent } from 'ngx-snake';
import { PlayerDataService } from '../player-data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  @ViewChild(NgxSnakeComponent)
  public _snake!: NgxSnakeComponent;
  public palette: string = ''
  public interval: any;
  public highScores: Scores[] = [];
  public playerData: Player = {
    name: '',
    auth_code: "",
  };
  
  public gameStatus: GameStatus = {
    isReady: true,
    isGo: false,
    isPaused: false,
    isGameOver: false,
  };

  public gameInfo: GameInfo = {
    playerName: '',
    score: 0,
    timeInTheGame: 0,
  };
  
  constructor(
    private _playerData: PlayerDataService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.handleSelectedPaletteParams()
  }
   public exitButton() {
      this._router.navigate(['/introPage']);
      }
     
  ngOnInit(): void {
    this.playerData = this._playerData.readData();
  }

public onStatusSaved(gameStatus: GameStatus) {
  this.gameStatus = gameStatus;
}
public foodEaten() {
  this.gameInfo.score++;
}
public gameOver() {
  this.gameStatus.isGameOver = true;
  this.gameStatus.isPaused = false;
  this.gameStatus.isGo = false;
  this.gameStatus.isReady = false;
  this.stopTimer();
}
public startTimer() {
  this.interval = setInterval(() => {
    this.gameInfo.timeInTheGame++;
  }, 1000);
}
public stopTimer() {
  clearInterval(this.interval);
}
public handleSelectedPaletteParams(){
  this._route.params.subscribe(params => {
    this.palette = params['palette']})
}

public switchPaletteMode() {
  const newPalette = this.palette === 'normal' ? 'high_contrast' : 'normal';
  this._router.navigate(['/gamePage', newPalette]);
}
}