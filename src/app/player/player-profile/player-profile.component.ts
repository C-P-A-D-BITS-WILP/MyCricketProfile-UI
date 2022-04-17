import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {
  battingColHeaders: string[] = ['Matches', 'Innings', 'NO', 'Runs', 'Highest Score', 'SR', 'AVG', '50s', '100s'];
  bowlingColHeaders: string[] = ['Matches', 'Innings', 'Balls', 'Runs', 'Wickets', 'AVG', 'Eco', '5W'];
  player!: any;
  isDataAvailable: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(path => {
      this.playerService.getPlayer(path['id']).subscribe(
        response => {
          this.isDataAvailable = true;
          this.player = response;
        },
        error => {
          console.error(error);
        });
    });
  }
}
