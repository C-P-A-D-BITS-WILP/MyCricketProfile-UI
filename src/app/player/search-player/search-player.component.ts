import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent implements OnInit {

  value: any = '';
  players: any = [];

  constructor(private route:Router, private playerService:PlayerService) { }

  ngOnInit(): void {

    this.playerService.getPlayers().subscribe(
      response => {
        console.info(response);
        this.players = response;
      },
      error => {

      }
    );
  }

  loadPlayer(playerId: Number): void {
    this.route.navigate(['/player']);
  }

}
