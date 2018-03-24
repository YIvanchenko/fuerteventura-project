import { Component } from '@angular/core';
import { OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';


import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { UserFormComponent } from '../user-form/user-form.component';
import { SecurityService } from '../../services/security.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {

  user: Observable<User | null>;

  constructor(private router: Router,
    private securityService: SecurityService,
    private dialog: MatDialog) {

    this.user = securityService.user;
  }

  ngOnInit(): void {
    
    setTimeout(() => {
      let dialogRef = this.dialog.open(UserFormComponent, {
        disableClose: true,        
        data: { name: '' }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        //this.animal = result;
      });

    });
  }


  //login() {
  //  this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
  //}

  //resetPassword() {
  //  this.auth.resetPassword(this.userForm.value['email'])
  //    .then(() => this.passReset = true);
  //}
  /// Social Login

  //signInWithGithub() {
  //  this.authService.githubLogin()
  //    .then(() => this.afterSignIn());
  //}

  //signInWithGoogle() {
  //  this.authService.googleLogin()
  //    .then(() => this.afterSignIn());
  //}

  //signInWithFacebook() {
  //  this.authService.facebookLogin()
  //    .then(() => this.afterSignIn());
  //}

  //signInWithTwitter() {
  //  this.authService.twitterLogin()
  //    .then(() => this.afterSignIn());
  //}

  ///// Shared

  //private afterSignIn() {
  //  // Do after login stuff here, such router redirects, toast messages, etc.
  //  this.router.navigate(['/']);
  //}

}
