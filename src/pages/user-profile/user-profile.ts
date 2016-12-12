import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/providers';


/*
  Generated class for the UserProfile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage {
  enrollmentCount:any;
  completedCount:any;
  processingCount:any;
  _params: any;

   username: any;
 userInfo: any;
 name: string;
 skillsets: string[];

 certification:[{}];
 rate: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ds: DataService) {
    this._params = navParams.data;
  }

  ionViewDidLoad() {
    console.log('Hello UserProfilePage Page');
    this.getUserProfile(this._params.requestorUid);
  }

  getUserProfile(userUid: string){
    this.enrollmentCount = "4";
    this.completedCount = "1";
    this.processingCount = "3";

    this.ds.getCurrentUserInfo().then(_data => {
      this.userInfo = _data;
      this.username= this.userInfo.fname+ " " + this.userInfo.lname;
      
    });
    this.rate="3";
    this.skillsets =['Salesforce', 'Excel','R', 'Html 5' , 'Css' ,'Javascript', 'Java lv 1', 'C++']
    
    // this.certification =[{badge:'medal',name: 'Microsoft Web Developement'},{badge:'star',name: 'Oracle Java 7 Professional'},
    // {badge:'ion-fireball',name: 'Certified Associated Project Manager '}];
    
  }

}
