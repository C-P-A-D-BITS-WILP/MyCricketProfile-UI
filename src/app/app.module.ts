import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './common/login/login.component';
import { LoginService } from './common/login/login.service';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SocialLoginModule, SocialAuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { RecentMatchComponent } from './match/recent-match/recent-match.component';
import { MatchCardComponent } from './match/match-card/match-card.component';
import { TeamHomeComponent } from './team/team-home/team-home.component';
import { TournamentHomeComponent } from './tournament/tournament-home/tournament-home.component';
import { PlayerProfileComponent } from './player/player-profile/player-profile.component';
import { SearchPlayerComponent } from './player/search-player/search-player.component';
import { DetailedMatchScoreComponent } from './match/detailed-match-score/detailed-match-score.component';
import { MatchHomeComponent } from './match/match-home/match-home.component';
import { UserProfileComponent } from './common/user-profile/user-profile.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { TeamInfoComponent } from './team/team-info/team-info.component';
import { TeamCreateComponent } from './team/team-create/team-create.component';
import { TeamManageComponent } from './team/team-manage/team-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    RecentMatchComponent,
    MatchCardComponent,
    TeamHomeComponent,
    TournamentHomeComponent,
    DetailedMatchScoreComponent,
    PlayerProfileComponent,
    SearchPlayerComponent,
    MatchHomeComponent,
    UserProfileComponent,
    TeamInfoComponent,
    TeamCreateComponent,
    TeamManageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    SocialLoginModule,

    MatSliderModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [
    LoginService,
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '731546835105-g88p68qcbb5c8579kebeeecikanhs53n.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
