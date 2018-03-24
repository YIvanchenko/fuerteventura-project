import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthProvider, GoogleAuthProvider } from 'firebase/auth';

import { User } from "../models/user";
import { UserInfo } from '@firebase/auth-types';

@Injectable()
export class SecurityService {

  user: Observable<User | null>;

  constructor(private readonly ngFireAuth: AngularFireAuth,
    private readonly ngFirestore: AngularFirestore,
    private readonly router: Router) {

    this.user = this.ngFireAuth.authState
      .switchMap((userInfo) => userInfo ? this.ngFirestore.doc<User>(`users/${userInfo.uid}`).valueChanges()
                                        : Observable.of(null));
  }

  emailLogin(email: string, password: string) {
    return this.ngFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => this.updateUserData(user))
      .catch((error) => this.handleError(error));
  }

  googleLogin() {
    return this.oAuthLogin(new GoogleAuthProvider());
  }

  signOut() {
    this.ngFireAuth.auth.signOut().then(() => this.router.navigate(['/']));
  }
  
  private oAuthLogin(provider: AuthProvider) {
    return this.ngFireAuth.auth.signInWithPopup(provider)
      .then((credential) => this.updateUserData(credential.user))
      .catch((error) => this.handleError(error));
  }
  
  private handleError(error: Error) {
    console.error(error);
  }
  
  private updateUserData(userInfo: UserInfo) {

    const userDocument: AngularFirestoreDocument<User> = this.ngFirestore.doc(`users/${userInfo.uid}`);

    const data: User = {
      id: userInfo.uid,
      email: userInfo.email,
      fullname: userInfo.displayName || 'nameless user'
    };

    return userDocument.set(data);
  }
}
