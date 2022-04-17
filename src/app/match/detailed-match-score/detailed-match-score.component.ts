import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-detailed-match-score',
  templateUrl: './detailed-match-score.component.html',
  styleUrls: ['./detailed-match-score.component.css']
})
export class DetailedMatchScoreComponent implements OnInit {

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getDetailedScoreCard(10).subscribe(
      response => {
        console.info(response);
      },
      error => {
        console.error(error);
      }
    );
  }

}
