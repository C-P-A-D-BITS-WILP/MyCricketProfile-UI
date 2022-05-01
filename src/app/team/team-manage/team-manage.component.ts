import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-manage',
  templateUrl: './team-manage.component.html',
  styleUrls: ['./team-manage.component.css']
})
export class TeamManageComponent implements OnInit {

  teamId!: number;
  teamName: String = '';
  teamSize!: number;
  teamLocation !: String;
  team: any = {};

  constructor(
    private teamService: TeamService,
    private dialogRef: MatDialogRef<TeamManageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      teamId: number
    }) {
    this.teamId = data.teamId;
  }

  ngOnInit(): void {
    this.teamService.getTeamInfo(this.teamId).subscribe(
      response => {
        console.info(response);
        this.team = response;
      },
      error => {
        console.error(error);
      }
    );
  }

  public editTeam(): void {
    this.teamService.updateTeam(this.team).subscribe(
      response => {
        this.dialogRef.close(response);
      },
      error => {
        this.dialogRef.close();
      }
    );
  }

  public objectComparisonFunction(option: any, value: any): boolean {
    return option.id === value.id;
  }

  acceptPlayer(playerId: any, arrayIndex: number): void {
    const teamMemberId = this.team.players[arrayIndex].teamMemberId;

    const data = {
      'teamMemberId': teamMemberId,
      'teamId': this.team.id
    }

    this.teamService.acceptPlayer(data).subscribe(
      response => {
        this.team.players[arrayIndex].playerStatus = 'CONFIRMED';
      },
      error => {
        console.error('Error accepting player');
      }
    );
  }

  removePlayer(playerId: any, arrayIndex: number): void {
    const teamMemberId = this.team.players[arrayIndex].teamMemberId;

    const data = {
      'teamMemberId': teamMemberId,
      'teamId': this.team.id
    }

    this.teamService.removePlayer(data).subscribe(
      response => {
        this.team.players.splice(arrayIndex, 1);
        console.info('Player Removed!');
      },
      error => {
        console.error('Error removing player');
      }
    );
  }
}

