import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  softDeleteTournament(tournamentId: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  getTournaments(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  getMyTournaments(userId: number): Observable<any> {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
