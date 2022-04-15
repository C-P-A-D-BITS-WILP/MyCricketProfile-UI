import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../login/login.component';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  public user: SocialUser = new SocialUser;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private authService: SocialAuthService) { }

  ngOnInit(): void {
  }

  openLoginDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(user => {
      this.isLoggedIn = true;
      this.user = user;
      this.openSnackBar(`Welcome back ${user.name}`, '');
    });
  }

  logout(): void {
    this.isLoggedIn = false;
    this.openSnackBar("You are successfully logged out", "");
    this.authService.signOut();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
