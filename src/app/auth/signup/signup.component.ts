import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import * as AuthAction from '../../store/actions/auth.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,  private store: Store<fromApp.AppSate>) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthAction.TrySignUp({username: email, password: password}));
  }

}
