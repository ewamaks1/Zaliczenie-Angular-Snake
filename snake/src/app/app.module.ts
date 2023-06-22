import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import {NgxSnakeModule} from 'ngx-snake';
import { RouterModule } from '@angular/router';
import { PlayerFormComponent } from './intro-page/player-form/player-form.component';
import { GameInfoComponent } from './game-page/game-info/game-info.component';
import { ControllerComponent } from './game-page/controller/controller.component';
import { HttpClientModule } from '@angular/common/http';
import { HighScoresComponent } from './game-page/highScores/highScores.component';
import { Top10scores } from './top10scores.pipe';
import { SortPipe } from './sort.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    GamePageComponent,
    PlayerFormComponent,
    GameInfoComponent,
    ControllerComponent,
    HighScoresComponent,
    Top10scores,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSnakeModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'introPage', component: IntroPageComponent},
      {path:'gamePage/:palette', component: GamePageComponent},
      {path:'**', redirectTo: 'introPage'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
