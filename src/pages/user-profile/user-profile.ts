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
  enrollmentCount: any;
  completedCount: any;
  processingCount: any;
  _params: any;

  username: any;
  userInfo: any;
  name: string;
  skillsets: string[];
  userRelatedComments:any;
  certification: [{}];
  comments: any
  rate: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ds: DataService) {
    this._params = navParams.data;
  }
 

  ionViewDidLoad() {
    console.log('Hello UserProfilePage Page');
    this.getUserProfile(this._params.requestorUid);
    this.comments = this.getAllCommets();
    this.userRelatedComments = this.comments.map( console.log);
  }

  getUserProfile(userUid: string) {
    this.enrollmentCount = "4";
    this.completedCount = "1";
    this.processingCount = "3";


    this.ds.getCurrentUserInfo().then(_data => {
      this.userInfo = _data;
      this.username = this.userInfo.fname + " " + this.userInfo.lname;

    });
    this.rate = "3";
    this.skillsets = ['Salesforce', 'Excel', 'R', 'Html 5', 'Css', 'Javascript', 'Java lv 1', 'C++']

    // this.certification =[{badge:'medal',name: 'Microsoft Web Developement'},{badge:'star',name: 'Oracle Java 7 Professional'},
    // {badge:'ion-fireball',name: 'Certified Associated Project Manager '}];

  }

  getAllCommets() {
   var datas=
      [
                  {
                    avatar:'assets/img/turtle.jpg',
                    commetedUid: '66BpsNdOYUcvSgcMDdBhctsi2hy1',
                    name: 'Joe Smith',
                    isFriend: 'Y',
                    comment: 'He is a very detail oriented person, creative. Have a great moment working with him',
                    serviceDtlUid: '-KYWUyZNp_I_OGSK313-',
                    serviceTitle: 'Capstone Project - Green House Desgin',
                    commentDate: '05/31/2015',

                  },
                  {
                    avatar:'assets/img/kitten.jpg',
                    commetedUid: '1',
                    name: 'Kate Fisher',
                    isFriend: 'N',
                    comment: 'Steven is a great colleague to work with, he is a go-getter and will accomplish every task he has been assigned. Open to learn and help others...He is an asset to our team',
                    serviceDtlUid: '-KYWUyZNp_I_OGSK313-',
                    serviceTitle: 'Capstone Project - Green House Desgin',
                    commentDate: '09/2/2016',

                  }
                ]
   
      
      return datas;
    
  }
  }


