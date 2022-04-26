import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  editTeam(): void {
    console.info(this.team);
  }

  public objectComparisonFunction(option: any, value: any): boolean {
    return option.id === value.id;
  }
}
