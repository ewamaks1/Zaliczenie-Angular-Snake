
    export interface Player {
      name: string;
      auth_code: string
  }
  
    export interface GameInfo {
      playerName: string;
      score: number;
      timeInTheGame: number;
    }
    
    export interface GameStatus {
      isGameOver: boolean;
      isPaused: boolean;
      isGo: boolean;
      isReady: boolean;
    }

    export interface Scores {
      name: string;
      score: number;
      }
    
 