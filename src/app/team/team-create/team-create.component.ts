import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  teamName: string = '';
  teamLocation: string = '';
  teamSize: Number = 12;
  currentUser: any = {};

  constructor(
    private teamService: TeamService,
    private dialogRef: MatDialogRef<TeamCreateComponent>,
  ) { }

  ngOnInit(): void {
    const currentSessionUser = sessionStorage.getItem('currentUser');

    if(currentSessionUser) {
      this.currentUser = JSON.parse(currentSessionUser);
    }
  }

  createTeam() {
    const data = {
      'teamName': this.teamName,
      'teamLocation': this.teamLocation,
      'teamSize': this.teamSize,
      'teamOwner': this.currentUser.id

    };
    this.teamService.createTeam(data).subscribe(
      response => {
        console.info('Team Created Successfully');
        this.dialogRef.close(response);
      },
      error => {
        console.info('Team Created failed!!')
      }
    );
  }
}
