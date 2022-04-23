import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-manage',
  templateUrl: './team-manage.component.html',
  styleUrls: ['./team-manage.component.css']
})
export class TeamManageComponent implements OnInit {

teamName: String = '';
teamSize!: Number;
teamLocation !: String;

  constructor() { }

  ngOnInit(): void {
  }

  editTeam(): void {

  }

}
