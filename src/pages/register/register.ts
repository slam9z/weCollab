import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController, AlertController, NavController } from 'ionic-angular';
import { ValidationService, UsersService } from '../../providers/providers';
import { HomePage } from '../../pages/pages';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  registerForm: FormGroup;
  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              public userService: UsersService,
              private loadingController: LoadingController,
              private alertController: AlertController) {
    this.registerForm = formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
      password: ['', Validators.compose([Validators.required, ValidationService.passwordValidator])]
    });

  }

  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }

  OnCreateAccount(formData){
  let loadingCtrl = this.loadingController.create({
      content: 'Creating Account...',
      dismissOnPageChange: true
    });   

    let fname = formData.fname;
    let lname = formData.lname; 
    let email = formData.email;
    let password = formData.password;

    loadingCtrl.present().then(() => {
        this.userService.register(fname,lname,email,password)
                        .then(
                              (data) => {
                                if (data) {
                                  this.userService.login(email,password)
                                          .then((authUser) => {
                                                if (authUser){
                                                  this.navCtrl.setRoot(HomePage);
                                                  this.navCtrl.push(HomePage);
                                                }
                                          });
                                }
                              },(error) => {
                                loadingCtrl.dismiss().then(() => {
                                   let alertCtrl = this.alertController.create({
                                        title: 'Failed',
                                        message: error.message,
                                        buttons: ['Dismiss']
                                    });
                                   
                                    alertCtrl.present();
                                });
                            });
    });
  }

  getLoadingController(){
    let loadingCtrl = this.loadingController.create({
      content: 'Verifying...',
      dismissOnPageChange: true
    });  
    return loadingCtrl;
  }
  
}
