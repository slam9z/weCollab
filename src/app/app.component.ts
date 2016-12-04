import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/pages';
import { ValidationService } from '../providers/providers';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  // pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    // firebase initialzeApp
    firebase.initializeApp({
       apiKey: "AIzaSyBGZChYzT5nv83OUqiRJworEfNJKyE9DXs",
       authDomain: "wecollab-app.firebaseapp.com",
       databaseURL: "https://wecollab-app.firebaseio.com",
       storageBucket: "wecollab-app.appspot.com",
       messagingSenderId: "687319763361"
    });
    this.initializeApp();
    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Page One', component: Page1 },
    //   { title: 'Page Two', component: Page2 }
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
