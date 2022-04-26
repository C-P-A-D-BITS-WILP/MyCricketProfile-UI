import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamManageComponent } from '../team-manage/team-manage.component';
import { TeamService } from '../team.service';

@Component({
  selector: 'team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit, OnChanges {

  @Input() teamId!: number;
  @Input() editable: Boolean = false;
  prevTeamId!: number;

  team: any = {
    name: 'RCB',
    owner: 'United Sprites',
    captain: 'Faf Du Plessis',
    identifier: '#xbyzj',
    location: 'Bengaluru',
    players: [
      { name: 'Virat' },
      { name: 'Faf' },
      { name: 'DK' },
      { name: 'Josh' },
      { name: 'Glen' }
    ]
  };

  constructor(
    private teamService: TeamService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.teamId && this.teamId !== this.prevTeamId) {
      this.prevTeamId = this.teamId;
      this.teamService.getTeamInfo(this.teamId).subscribe(
        response => {
          this.team = response;
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  public openManageTeamDlg(): void {
    let dialogRef = this.dialog.open(TeamManageComponent);
    dialogRef.afterClosed().subscribe(
      user => {
        console.info('Dialog Closed!!');
      });
  }

}
