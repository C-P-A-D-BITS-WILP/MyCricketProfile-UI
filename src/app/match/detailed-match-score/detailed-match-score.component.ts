import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-detailed-match-score',
  templateUrl: './detailed-match-score.component.html',
  styleUrls: ['./detailed-match-score.component.css']
})
export class DetailedMatchScoreComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService
  ) { }

  detailScore !: any;
  isDataAvailable: boolean = false;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(path => {
      this.matchService.getDetailedScoreCard(path['id']).subscribe(
        response => {
          console.info(response);
          this.detailScore = response;
          this.isDataAvailable = true;
        },
        error => {
          console.error(error);
        }
      );
    });
  }
}
