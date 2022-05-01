import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { UserProfileComponent } from './common/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { DetailedMatchScoreComponent } from './match/detailed-match-score/detailed-match-score.component';
import { MatchAdminHomeComponent } from './match/match-admin-home/match-admin-home.component';
import { MatchHomeComponent } from './match/match-home/match-home.component';
import { PlayerProfileComponent } from './player/player-profile/player-profile.component';
import { SearchPlayerComponent } from './player/search-player/search-player.component';
import { TeamHomeComponent } from './team/team-home/team-home.component';
import { TournamentHomeComponent } from './tournament/tournament-home/tournament-home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamHomeComponent },
  { path: 'tournament', component: TournamentHomeComponent },
  { path: 'match-admin', component: MatchAdminHomeComponent },
  { path: 'detailed-score/:id', component: DetailedMatchScoreComponent },
  { path: 'search-player', component: SearchPlayerComponent },
  { path: 'player/:id', component: PlayerProfileComponent },
  { path: 'match', component: MatchHomeComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
