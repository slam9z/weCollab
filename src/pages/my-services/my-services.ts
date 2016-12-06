import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MyServices page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-services',
  templateUrl: 'my-services.html'
})
export class MyServicesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MyServicesPage Page');
  }

}
