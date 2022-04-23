import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  teamName: string = '';
  teamLocation: string = '';
  teamSize: Number = 12;

  constructor() { }

  ngOnInit(): void {
  }

  createTeam() {
    console.info(this.teamName);
  }
}
