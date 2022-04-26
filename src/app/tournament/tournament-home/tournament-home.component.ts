import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-tournament-home',
  templateUrl: './tournament-home.component.html',
  styleUrls: ['./tournament-home.component.css']
})
export class TournamentHomeComponent implements OnInit {


  value: any = '';
  selectedTabIndex = 0;
  selectedTournamentId !: number;
  subtab = 1;
  tournaments = [{
    id: 10,
    name: 'ancd'
  }];

  constructor(
    private tournamentService: TournamentService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.selectedTabIndex = 0;
    this.getTournamentList();
  }

  public onTabChanged(event: any) {
    this.selectedTabIndex = event.index;
    if (this.selectedTabIndex === 0) {
      this.getTournamentList();
    } else {
      this.getMyTournamentList();
    }
  }

  public getMyTournamentList(): void {
    const userId = 1;
    this.tournamentService.getMyTournaments(userId).subscribe(
      response => {
        this.tournaments = response;
        this.selectedTournamentId = this.tournaments[0].id;
      },
      error => {
        console.error(error);
      }
    );
  }

  public getTournamentList(): void {
    this.tournamentService.getTournaments().subscribe(
      response => {
        this.tournaments = response;
        this.selectedTournamentId = this.tournaments[0].id;
      },
      error => {
        console.error(error);
      }
    );
  }

  public populateTournamentData(tournamentId: any): void {
    this.selectedTournamentId = tournamentId;
  }

  public openCreateTournamentDlg(): void {
    let dialogRef = this.dialog.open(TournamentHomeComponent);
    dialogRef.afterClosed().subscribe(
      user => {
        console.info('Dialog Closed!!');
      });
  }

  public manageTournament(tournamentId: number): void {
    let dialogRef = this.dialog.open(TournamentHomeComponent, { data: { tournamentId: tournamentId }, });
    dialogRef.afterClosed().subscribe(
      user => {
        console.info('Dialog Closed!!');
      });
  }

  public deleteTournament(tournamentId: number): void {
    this.tournamentService.softDeleteTournament(tournamentId).subscribe(
      response => {
        console.info('tournament deleted');
      },
      error => {
        console.error(error);
      }
    );
  }

}
