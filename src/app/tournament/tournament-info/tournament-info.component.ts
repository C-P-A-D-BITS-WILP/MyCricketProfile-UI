import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tournament-info',
  templateUrl: './tournament-info.component.html',
  styleUrls: ['./tournament-info.component.css']
})
export class TournamentInfoComponent implements OnInit {

  @Input() tournamentId!: number;
  @Input() editable: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
