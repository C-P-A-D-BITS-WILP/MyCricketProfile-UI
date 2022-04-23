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
  softDeleteTeamURL: string = '/soft-delete-team';
  getTeamInfoURL: string = '/team-info';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    return this.http.get<Response>(this.getTeamsURL)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  getMyTeams(userId: number): Observable<any> {
    const url = `${this.getMyTeamsURL}/${userId}`;
    return this.http.get<Response>(url)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  getTeamInfo(teamId: number): Observable<any> {
    const url = `${this.getTeamInfoURL}/${teamId}`;
    return this.http.get<Response>(url)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
    ;
  }

  softDeleteTeam(teamId: number): Observable<any> {
    const url = `${this.softDeleteTeamURL}/${teamId}`;
    return this.http.delete<Response>(url)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }
}
