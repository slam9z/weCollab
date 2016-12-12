import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyServicesPage, MessagePage, NotificationPage, MePage } from '../../pages/pages';


/*
  Generated class for the Home tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  NotificaitionCount :string = "3";
  tab1Root: any = MyServicesPage;
  tab2Root: any = MessagePage;
  tab3Root: any = NotificationPage;
  tab4Root: any = MePage;

  constructor(public navCtrl: NavController) {
    
   
  }
  

}