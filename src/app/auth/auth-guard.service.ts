import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../store/reducers/auth.reducers';
import { Store } from '@ngrx/store';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromApp.AppSate>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth').pipe(take(1), map( (authState: fromAuth.State) => {
      return authState.authenticated;
    }));
  }
}
