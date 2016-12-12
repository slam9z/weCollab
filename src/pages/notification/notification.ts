import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProfilePage } from '../../pages/pages';

/*
  Generated class for the Notification page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  notifications=[{}];
  
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello NotificationPage Page');
    this.getNotificationList();
  }

  getNotificationList(){
    this.notifications =[
      {
        avatar: 'assets/img/rabbit.jpg',
        name: 'Samual Song',
        timestamp: '12/13/2016 6:00PM',
        message: 'Hey, I am interesting in your service - Mobile App for Mobile Dev class, please let me join with your team.',
        serviceDtlUid:'-KYk2FuACryF1dwJk_WO',
        serviceTeamUid: '-KYk2Fukbm-oLcaJWkG-',
        requestorUid:'pwT9yue5AUT7Wpy4hnZnwbj33NA3'

      },
      {
        avatar:'assets/img/bear.jpg',
        name: 'Mark Russo',
        timestamp: '12/13/2016 2:00PM',
        message: 'Hey, I am interesting in your service - Markeing Website desgin, please let me join with your team.',
        serviceDtlUid:'-KYZd-eHDHr6tLRl03W4',
        serviceTeamUid: '-KYk2Fukbm-oLcaJWkG-',
        requestorUid:'66BpsNdOYUcvSgcMDdBhctsi2hy1'

      }


    ]
  }
  goToUserProfileDtl(ntfObj){
    this.navCtrl.push(UserProfilePage, ntfObj);
  }
}
