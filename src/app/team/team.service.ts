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
  createTeamURL: string = '/create-team';
  updateTeamURL: string = '/update-team';
  removePlayerURL: string = '/remove-player';
  acceptPlayerURL: string = '/accept-player';
  requestToJoinURL: string = '/request-join-team'

  constructor(private http: HttpClient) { }

  requestToJoin(data: any): Observable<any> {
    return this.http.post<Response>(this.requestToJoinURL, data)
    .pipe(
      catchError((error: any) => {
        return "success";
        // Do Nothing
      })
    );;
  }

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

  createTeam(data: any): Observable<any>  {
    return this.http.post<Response>(this.createTeamURL, data)
    .pipe(
      // map(response => response.json()),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  updateTeam(team: any): Observable<any> {
    return this.http.post<Response>(this.updateTeamURL, team)
    .pipe(
      // map(response => response.json()),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  removePlayer(data: any) {
    return this.http.post<Response>(this.removePlayerURL, data)
    .pipe(
      // map(response => response.json()),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  acceptPlayer(data: any) {
    return this.http.post<Response>(this.acceptPlayerURL, data)
    .pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}
