import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ShoppingApp';
  loadedFeature = 'recipe';
  config = {
    apiKey: 'AIzaSyDg53ODRPPSu4G7or5sTWc6qcfufpx5EZ8',
    authDomain: 'ng-recipe-book-cfe4c.firebaseapp.com',
    databaseURL: 'https://ng-recipe-book-cfe4c.firebaseio.com',
    projectId: 'ng-recipe-book-cfe4c',
    storageBucket: 'ng-recipe-book-cfe4c.appspot.com',
    messagingSenderId: '457810654842'
  };
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDg53ODRPPSu4G7or5sTWc6qcfufpx5EZ8',
    authDomain: 'ng-recipe-book-cfe4c.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
