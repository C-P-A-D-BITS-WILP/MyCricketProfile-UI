import { Component, Input, OnInit } from '@angular/core';
import { MatchCard } from './match-card';

@Component({
  selector: 'match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent implements OnInit {

  @Input() matchCard!: MatchCard;

  tournament_name: String = 'Pepsi Cup';
  team1: String = 'Ind';
  score1: String = '300-3 (45)';
  team2: String = 'Aus';
  score2: String = '';

  summary: String = 'Aus need 300 runs in 45 Overs';

  constructor() { }

  ngOnInit(): void {
  }

}
