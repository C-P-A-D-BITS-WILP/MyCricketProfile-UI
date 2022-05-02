import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatchCard } from '../match-card/match-card';
import { MatchService } from '../match.service';

@Component({
  selector: 'recent-match',
  templateUrl: './recent-match.component.html',
  styleUrls: ['./recent-match.component.css']
})
export class RecentMatchComponent implements OnInit {

  matchCard!: MatchCard[];

  constructor(
    private router: Router,
    private matchService: MatchService
    ) { }

  ngOnInit(): void {
    this.matchService.getRecentMatches().subscribe(
      response => {
        this.matchCard = response;
      },
      error => {
        console.error(error);
      }
    );
  }

  loadDetailedScore(match: MatchCard): void {
    this.router.navigate(['/detailed-score', match.id ]);
  }
}
