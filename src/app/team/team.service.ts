import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  getTeamsURL: string = '/teams';
  getMyTeamsURL: string = '/my-teams';
  getTeamURL: string = '';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    return this.http.get<Response>(this.getTeamsURL)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  getMyTeams(): Observable<any> {
    return this.http.get<Response>(this.getMyTeamsURL)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  getTeamInfo(): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
