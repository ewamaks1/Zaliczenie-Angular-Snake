import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerDataService } from 'src/app/player-data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent {
  public playerForm = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    auth_code: ['', [Validators.required, Validators.minLength(5)]],
    paletteSelected: ['normal']
  });

  constructor(
    private _router: Router, 
    private _playerData: PlayerDataService, 
    private _fb: FormBuilder) { }
 

  playGame() {
    this._playerData.savePlayerData({name:this.playerForm.value.name!, auth_code:this.playerForm.value.auth_code!})
    this._router.navigate(['/gamePage', this.playerForm.value.paletteSelected]);
  }

}