import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit, OnChanges {

  @Input() teamId!: Number;
  team: any = {
    name: 'RCB',
    owner: 'United Sprites',
    captain: 'Faf Du Plessis',
    location: 'Bengaluru',
    players: [
      { name: 'Kohli' },
      { name: 'Faf' },
      { name: 'DK' },
      { name: 'Josh' },
      { name: 'Glen' }
    ]
  };

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.teamId);

    //  this.teamService.getTeamInfo().subscribe(
    //    response => {
    //      console.info(response);
    //    },
    //    error => {
    //      console.error(error);
    //    }
    //  );
  }
}
