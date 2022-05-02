import { Component, OnInit, ViewEncapsulation, ɵɵsetComponentScope } from '@angular/core';
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
    id: 0,
    name: ''
  }];

  reload: boolean = false;

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
    const currentSessionUser = sessionStorage.getItem('currentUser');

    if(currentSessionUser) {
      const userId = JSON.parse(currentSessionUser).id;
      this.teamService.getMyTeams(userId).subscribe(
        response => {
          this.teams = response;

          if(this.teams.length != 0) {
            this.selectedTeamId = this.teams[0].id;
          } else {
            this.selectedTeamId = -1;
          }
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.error('User not logged in!!');
    }
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
    this.reload = true;
  }

  public openCreateTeamDlg(): void {
    let dialogRef = this.dialog.open(TeamCreateComponent);
    dialogRef.afterClosed().subscribe(
      team => {
        console.info('Dialog Closed!!');
        this.getMyTeamList();
      });
  }

  manageTeam(teamId: number): void {
    let dialogRef = this.dialog.open(TeamManageComponent, { data: { teamId: teamId }, });
    dialogRef.afterClosed().subscribe(
      user => {
        this.getMyTeamList();
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
