import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit, OnChanges {

  @Input() teamId!: Number;
  @Input() editable: Boolean = false;


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

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    //  this.teamService.getTeamInfo().subscribe(
    //    response => {
    //      console.info(response);
    //    },
    //    error => {
    //      console.error(error);
    //    }
    //  );
  }

  public openManageTeamDlg(): void {

  }

}
