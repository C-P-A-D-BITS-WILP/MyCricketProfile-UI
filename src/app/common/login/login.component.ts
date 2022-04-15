import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: SocialUser = new SocialUser;

  constructor(public dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService, private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;

      if(user != null) {
        console.log(user);
        this.dialogRef.close(this.user);
      }
    });

  }

  authenticate(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
