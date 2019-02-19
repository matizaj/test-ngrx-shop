import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as AuthAction from '../../store/actions/auth.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<fromApp.AppSate>) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthAction.TrySignIn({username: email, password: password}));
  }

}
