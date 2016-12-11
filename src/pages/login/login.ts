import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService, UsersService } from '../../providers/providers';
import { LoadingController, AlertController,  NavController } from 'ionic-angular';
import { RegisterPage, HomePage } from '../../pages/pages';
import { Storage, SqlStorage } from 'ionic-framework/ionic';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  
  constructor(public navCtrl: NavController, 
              private formBuilder: FormBuilder, 
              private userService: UsersService,
              public loadingController: LoadingController,
              public alertController: AlertController) {
    this.loginForm = formBuilder.group({
        email: ['', Validators.compose([
                        Validators.required,
                        ValidationService.emailValidator
                    ])],
        password :['', Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
    
  }
  
  onSubmit(formData) {
    
    let loadingCtrl = this.loadingController.create({
      content: 'Verifying...',
      dismissOnPageChange: true
    });    
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;
    
    loadingCtrl.present().then(() => {
        this.userService.login(email,password)
                        .then(
                              (data) => {
                                if (data){
                                  
                                  this.navCtrl.setRoot(HomePage);
                                  this.navCtrl.push(HomePage);
                                }
                              },(error) => {
                                loadingCtrl.dismiss().then(() => {
                                    let alertCtrl = this.alertController.create({
                                        title: 'Login Failed',
                                        message: error.message,
                                        buttons: ['Dismiss']
                                    });
                                    console.log('user ws call error:' + error)
                                    alertCtrl.present();
                                });
                            });
    });

  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  
  goToForgetPassword(){

  }
}
