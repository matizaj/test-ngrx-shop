import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import * as fromApp from '../store/app.reducers';
import * as AuthAction from '../store/actions/auth.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router, private store: Store<fromApp.AppSate>) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      user => {
        this.store.dispatch(new AuthAction.SignUp());
        firebase.auth().currentUser.getToken()
            .then(
              (token: string) => {
                this.store.dispatch(new AuthAction.SetToken(token));
              }
            );
      }
    )

      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.store.dispatch(new AuthAction.SignIn());
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => {
                this.store.dispatch(new AuthAction.SetToken(token));
              }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthAction.Logout());
  }

}
