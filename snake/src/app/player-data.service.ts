import { Injectable } from '@angular/core';
import { Player } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  public playerData: Player = {
    name: '',
    auth_code: "",
  };
 
  readData () {
  return this.playerData;
}
  savePlayerData(data:Player){
  this.playerData = data;
}

  constructor() { }
}

