import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayersURL = '/players';

  getPlayers(): Observable<any> {
    return this.http.get<Response>(this.getPlayersURL)
      .pipe(
        // map(response => response.json()),
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  getPlayer(id: string): Observable<any> {
    let playerURL = `/player/${id}`;
    return this.http.get<Response>(playerURL)
      .pipe(
        // map(response => response.json()),
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }
}
