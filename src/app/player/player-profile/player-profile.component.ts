import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../player';

const player: Player[] = [
  {
    name: 'Shikar Dhawan',
    age: 35,
    batting_style: 'Left Handed Bat',
    bowling_style: 'Right-arm offbreak',
    role: 'Batsman',
    score: {
      matches: 34,
      batting: {
        'innings': 58,
        'notOut': 1,
        'runs': 2315,
        'highestScore': 190,
        'strikeRate': 66.95,
        'avg': 40.61,
        'fifties': 5,
        'hundreds': 7
      },
      bowling: {
        'innings': 5,
        'balls': 54,
        'runs': 18,
        'wickets': 0,
        'average': 0,
        'economy': 2.0,
        'fiver': 0
      }
    }
  }
];

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {
  player = player[0];
  battingColHeaders: string[] = ['Matches', 'Innings', 'NO', 'Runs', 'Highest Score', 'SR', 'AVG', '50s', '100s'];
  bowlingColHeaders: string[] = ['Matches', 'Innings', 'Balls', 'Runs', 'Wickets', 'AVG', 'Eco', '5W'];
  dataSource = player;
  constructor() { }

  ngOnInit(): void {

  }
}
