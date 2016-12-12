import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../providers/providers';
import { LoginPage } from '../../pages/pages';

/*
  Generated class for the Me page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
 username: any;
 userInfo: any;
 name: string;
 skillsets: string[];
 meForm: FormGroup;
 certification:[{}];
 rate: string;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private us: DataService, private fb:FormBuilder) {
    this.meForm = fb.group({
         name: [''],
         rate: ['3']
      });
  
  }

  ionViewDidLoad() {
    this.us.getCurrentUserInfo().then(_data => {
      this.userInfo = _data;
      this.username= this.userInfo.fname+ " " + this.userInfo.lname;
      //console.log(_data);  
    });
    this.rate="3";
    this.skillsets =['Python', 'Django','R', 'Java','C #' , 'Oracle', 'MySQL' , 'Angular 2', 'Ionic 2', 'Html 5' , 'Css' ,'Javascript', 'Cystal Report']
    //console.log(this.username);
    this.certification =[{badge:'medal',name: 'Microsoft Web Developement'},{badge:'star',name: 'Oracle Java 7 Professional'},
    {badge:'ion-fireball',name: 'Certified Associated Project Manager '}]
    console.log('Hello MePage Page');
  }
 updatePicture() {
    console.log('Clicked to update picture');
  }
  getIconName(badgeName){
    return badgeName;

  }
  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: 'hardcode',
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: data => {
       //this.userData.setUsername(data.username);
        //this.getUsername();
      }
    });

    alert.present();
  }


  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    
    this.us.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  onSubmit(meForm){

  }

  support() {
   
  }


}
