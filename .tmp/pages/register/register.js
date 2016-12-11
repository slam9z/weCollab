import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController, NavController } from 'ionic-angular';
import { ValidationService, UsersService } from '../../providers/providers';
import { HomePage } from '../../pages/pages';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var RegisterPage = (function () {
    function RegisterPage(navCtrl, formBuilder, userService, loadingController, alertController) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.registerForm = formBuilder.group({
            fname: ['', Validators.required],
            lname: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            password: ['', Validators.compose([Validators.required, ValidationService.passwordValidator])]
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('Hello RegisterPage Page');
    };
    RegisterPage.prototype.OnCreateAccount = function (formData) {
        var _this = this;
        var loadingCtrl = this.loadingController.create({
            content: 'Creating Account...',
            dismissOnPageChange: true
        });
        var fname = formData.fname;
        var lname = formData.lname;
        var email = formData.email;
        var password = formData.password;
        loadingCtrl.present().then(function () {
            _this.userService.register(fname, lname, email, password)
                .then(function (data) {
                if (data) {
                    _this.userService.login(email, password)
                        .then(function (authUser) {
                        if (authUser) {
                            _this.navCtrl.setRoot(HomePage);
                            _this.navCtrl.push(HomePage);
                        }
                    });
                }
            }, function (error) {
                loadingCtrl.dismiss().then(function () {
                    var alertCtrl = _this.alertController.create({
                        title: 'Failed',
                        message: error.message,
                        buttons: ['Dismiss']
                    });
                    alertCtrl.present();
                });
            });
        });
    };
    RegisterPage.prototype.getLoadingController = function () {
        var loadingCtrl = this.loadingController.create({
            content: 'Verifying...',
            dismissOnPageChange: true
        });
        return loadingCtrl;
    };
    RegisterPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-register',
                    templateUrl: 'register.html'
                },] },
    ];
    /** @nocollapse */
    RegisterPage.ctorParameters = [
        { type: NavController, },
        { type: FormBuilder, },
        { type: UsersService, },
        { type: LoadingController, },
        { type: AlertController, },
    ];
    return RegisterPage;
}());
//# sourceMappingURL=register.js.map