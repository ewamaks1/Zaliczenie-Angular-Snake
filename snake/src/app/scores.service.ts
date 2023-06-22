import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Scores } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {
  private URL = 'https://scores.chrum.it/scores/snake';
  constructor(private _http: HttpClient) { }

  public load(): Observable<Scores[]> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
    return this._http.get<Scores[]>(this.URL, { headers: headers });
  }
}
