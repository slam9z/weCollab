import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController, NavController } from 'ionic-angular';
import { ValidationService, UsersService } from '../../providers/providers';
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
              private loadingController: LoadingController) {
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

  OnCreateAccount(){
  let loadingCtrl = this.loadingController.create({
      content: 'Verifying...',
      dismissOnPageChange: true
    });   

    let fname = this.registerForm.controls['fname'].value;
    let lname = this.registerForm.controls['lname'].value; 
    let email = this.registerForm.controls['email'].value;
    let password = this.registerForm.controls['password'].value;

    loadingCtrl.present().then(() => {
        this.userService.register(fname,lname,email,password)
                        .then(
                              (data) => {
                                console.log('user ws call return: ' + data)
                              },(error) => {
                                loadingCtrl.dismiss().then(() => {
                                   
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
