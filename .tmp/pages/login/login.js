import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ValidationService, UsersService } from '../../providers/providers';
import { LoadingController, AlertController, NavController } from 'ionic-angular';
import { RegisterPage, HomePage } from '../../pages/pages';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var LoginPage = (function () {
    function LoginPage(navCtrl, formBuilder, userService, loadingController, alertController) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.loginForm = formBuilder.group({
            email: ['', Validators.compose([
                    Validators.required,
                    ValidationService.emailValidator
                ])],
            password: ['', Validators.required]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('Hello LoginPage Page');
    };
    LoginPage.prototype.onSubmit = function (formData) {
        var _this = this;
        var loadingCtrl = this.loadingController.create({
            content: 'Verifying...',
            dismissOnPageChange: true
        });
        var email = formData.email;
        var password = formData.password;
        loadingCtrl.present().then(function () {
            _this.userService.login(email, password)
                .then(function (data) {
                if (data) {
                    _this.navCtrl.setRoot(HomePage);
                    _this.navCtrl.push(HomePage);
                }
            }, function (error) {
                loadingCtrl.dismiss().then(function () {
                    var alertCtrl = _this.alertController.create({
                        title: 'Login Failed',
                        message: error.message,
                        buttons: ['Dismiss']
                    });
                    console.log('user ws call error:' + error);
                    alertCtrl.present();
                });
            });
        });
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(RegisterPage);
    };
    LoginPage.prototype.goToForgetPassword = function () {
    };
    LoginPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-login',
                    templateUrl: 'login.html'
                },] },
    ];
    /** @nocollapse */
    LoginPage.ctorParameters = [
        { type: NavController, },
        { type: FormBuilder, },
        { type: UsersService, },
        { type: LoadingController, },
        { type: AlertController, },
    ];
    return LoginPage;
}());
//# sourceMappingURL=login.js.map