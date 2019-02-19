import { Component, OnInit } from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../store/reducers/auth.reducers';
import { Observable } from 'rxjs';

import * as AuthActions from '../../store/actions/auth.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  stateAuth$: Observable<fromAuth.State>;
  constructor(private dataStorageService: DataStorageService,
              private store: Store<fromApp.AppSate>) {
  }
  ngOnInit() {
    this.stateAuth$ = this.store.select('auth');
  }
  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
