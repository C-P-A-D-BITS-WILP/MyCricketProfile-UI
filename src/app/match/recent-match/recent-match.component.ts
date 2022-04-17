import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatchCard } from '../match-card/match-card';

@Component({
  selector: 'recent-match',
  templateUrl: './recent-match.component.html',
  styleUrls: ['./recent-match.component.css']
})
export class RecentMatchComponent implements OnInit {

  matchCard!: MatchCard[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.matchCard = [
      { id: '1', tournament_name: 'IPL', team1: 'RCB', score1: 130, wickets1: 2, overs1: 30, team2: 'KXIP', score2: 0, wickets2: 0, overs2: 0, summary: 'RCB Won' },
      { id: '2', tournament_name: 'Pepsi Cup', team1: 'Ind', score1: 130, wickets1: 2, overs1: 30, team2: 'Eng', score2: 0, wickets2: 0, overs2: 0, summary: 'sasdas' },
      { id: '3', tournament_name: 'Bilaterial Series', team1: 'RSA', score1: 130, wickets1: 2, overs1: 30, team2: 'WI', score2: 0, wickets2: 0, overs2: 0, summary: 'asdasd' },
      { id: '4', tournament_name: 'Ashes', team1: 'Eng', score1: 130, wickets1: 2, overs1: 30, team2: 'Aus', score2: 0, wickets2: 0, overs2: 0, summary: 'asdasd' },
      { id: '5', tournament_name: 'Ashes', team1: 'Eng', score1: 130, wickets1: 2, overs1: 30, team2: 'Aus', score2: 0, wickets2: 0, overs2: 0, summary: 'asdasd' },
      { id: '6', tournament_name: 'Ashes', team1: 'Eng', score1: 130, wickets1: 2, overs1: 30, team2: 'Aus', score2: 0, wickets2: 0, overs2: 0, summary: 'asdasd' },
      { id: '7', tournament_name: 'Ashes', team1: 'Eng', score1: 130, wickets1: 2, overs1: 30, team2: 'Aus', score2: 0, wickets2: 0, overs2: 0, summary: 'asdasd' },
      { id: '8', tournament_name: 'Ashes', team1: 'Eng', score1: 130, wickets1: 2, overs1: 30, team2: 'Aus', score2: 0, wickets2: 0, overs2: 0, summary: 'asdasd' },
    ];
  }

  loadDetailedScore(match: MatchCard): void {
    this.router.navigate(['/detailed-score', match.id ]);
  }
}
