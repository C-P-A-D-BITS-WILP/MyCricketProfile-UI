import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent implements OnInit {

  value: any = '';
  players: any = [];

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.players = [
      {'id': 1, 'name' : 'Sachin Tendulkar'},
      {'id': 2, 'name' : 'Virat Kohli'},
      {'id': 3, 'name' : 'Mahindra Singh Dhoni'},
      {'id': 4, 'name' : 'Rohit Sharma'},
      {'id': 5, 'name' : 'KL Rahul'},
      {'id': 6, 'name' : 'Mayank Agarwal'},
      {'id': 7, 'name' : 'Chris Gayle'},
      {'id': 8, 'name' : 'A B De Villiars'},
      {'id': 9, 'name' : 'Robin Uttappa'},
    ];
  }

  loadPlayer(playerId: Number): void {
    this.route.navigate(['/player']);
  }

}
