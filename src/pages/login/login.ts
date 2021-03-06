import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService, UsersService } from '../../providers/providers';
import { LoadingController, AlertController,  NavController , NavParams} from 'ionic-angular';
import { RegisterPage, HomePage } from '../../pages/pages';

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
  _param : any;
  constructor(public navCtrl: NavController, 
              public navParam: NavParams,
              private formBuilder: FormBuilder, 
              private userService: UsersService,
              public loadingController: LoadingController,
              public alertController: AlertController) {
    this._param = this.navParam.data;
    if (this._param === "logout"){
      this.userService.logout();
    }
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
    let email = formData.email;
    let password = formData.password;
    
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
