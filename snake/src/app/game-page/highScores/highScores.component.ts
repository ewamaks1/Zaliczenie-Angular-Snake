import { Component, OnInit, Input } from '@angular/core';
import { ScoresService } from 'src/app/scores.service';
import { Subscription } from 'rxjs';
import { Scores } from 'src/app/interfaces';


@Component({
  selector: 'app-highScores',
  templateUrl: './highScores.component.html',
  styleUrls: ['./highScores.component.scss'],
})
export class HighScoresComponent implements OnInit {
  public allScores: Scores[] = [];
  public showScores: boolean = false;
  public sortBy: string = '';
  public sub!: Subscription;
  @Input() public highScores: Scores[] = [];
 
  constructor(private _highScores: ScoresService) {}
  ngOnInit(): void {
    this.sub = this._highScores.load().subscribe({
      next: (scores) => {
        this.allScores = scores;
      },
    });
  }

  updateScoresDisplay(){
    this.showScores = !this.showScores;
  }
}

