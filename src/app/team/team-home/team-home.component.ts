import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamCreateComponent } from '../team-create/team-create.component';
import { TeamManageComponent } from '../team-manage/team-manage.component';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-home',
  templateUrl: './team-home.component.html',
  styleUrls: ['./team-home.component.css'],
  encapsulation: ViewEncapsulation.None //Add this line
})
export class TeamHomeComponent implements OnInit {

  value: any = '';
  selectedTabIndex = 0;
  selectedTeamId !: number;
  subtab = 1;
  teams = [{
    id: 10,
    name: 'ancd'
  }];

  constructor(
    private teamService: TeamService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.selectedTabIndex = 0;
    this.getTeamList();
  }

  public onTabChanged(event: any) {
    this.selectedTabIndex = event.index;
    if (this.selectedTabIndex === 0) {
      this.getTeamList();
    } else {
      this.getMyTeamList();
    }
  }

  public getMyTeamList(): void {
    const userId = 1;
    this.teamService.getMyTeams(userId).subscribe(
      response => {
        this.teams = response;
        this.selectedTeamId = this.teams[0].id;
      },
      error => {
        console.error(error);
      }
    );
  }

  public getTeamList(): void {
    this.teamService.getTeams().subscribe(
      response => {
        this.teams = response;
        this.selectedTeamId = this.teams[0].id;
      },
      error => {
        console.error(error);
      }
    );
  }

  public populateTeamData(teamId: any): void {
    this.selectedTeamId = teamId;
  }

  public openCreateTeamDlg(): void {
    let dialogRef = this.dialog.open(TeamCreateComponent);
    dialogRef.afterClosed().subscribe(
      user => {
        console.info('Dialog Closed!!');
      });
  }

  manageTeam(teamId: number): void {
    // let dialogRef = dialog.open(YourDialog, {
    //   data: { name: 'austin' },
    // });
    let dialogRef = this.dialog.open(TeamManageComponent, { data: { teamId: teamId }, });
    dialogRef.afterClosed().subscribe(
      user => {
        console.info('Dialog Closed!!');
      });
  }

  deleteTeam(teamId: number): void {
    this.teamService.softDeleteTeam(teamId).subscribe(
      response => {
        console.info('team deleted');
      },
      error => {
        console.error(error);
      }
    );
  }
}
