import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-home',
  templateUrl: './team-home.component.html',
  styleUrls: ['./team-home.component.css']
})
export class TeamHomeComponent implements OnInit {

  value: any = '';
  subtab = 1;
  teams = [{
    id: 10,
    name:'ancd'
  }];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.changeTab(1);
  }

  changeTab(tabValue: number) {
    this.subtab = tabValue;
    if(tabValue == 1) {
      this.getTeamList();
    } else {
      this.getMyTeamList();
    }
  }

  getMyTeamList() {
    this.teamService.getMyTeams().subscribe(
      response => {
        this.teams = response;
      },
      error => {
        console.error(error);
      }
    );
  }

  getTeamList() {
    this.teamService.getTeams().subscribe(
      response => {
        this.teams = response;
      },
      error => {
        console.error(error);
      }
    );
  }
}
