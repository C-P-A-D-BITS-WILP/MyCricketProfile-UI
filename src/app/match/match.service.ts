import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getDetailedScoreCard(matchId: number): Observable<any> {
    let detailedMatchURL = `/match-score/${matchId}`;
    return this.http.get<Response>(detailedMatchURL)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }
}
