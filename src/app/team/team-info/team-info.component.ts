import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';
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
  @Input() reload: Boolean = false;
  prevTeamId!: number;
  currentUser: any = {};

  rqstJoinBtn: boolean = false;

  team: any = { 
    owner: {},
    captain: {}
  };

  constructor(
    private teamService: TeamService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const currentSessionUser = sessionStorage.getItem('currentUser');

    if(currentSessionUser) {
      this.currentUser = JSON.parse(currentSessionUser);
    }
  }

  ngOnChanges() {
    this.reload = false;
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

  public showJoinBtn(): boolean {
    if(this.team.owner.id === this.currentUser.id ) {
      return false;
    } else {
      return true;
    }
  }

  public requestToJoin(): void {
    const data = {
      'userId': this.currentUser.id,
      'teamId': this.team.id
    }

    this.teamService.requestToJoin(data).subscribe(
      response => {
        console.info('Request sent successfully');
        this.rqstJoinBtn = true;
      },
      error => {
        console.error(error);
        this.rqstJoinBtn = true;
      }
    );
  }
}
