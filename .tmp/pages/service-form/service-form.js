import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../providers/providers';
import { LoadingController, AlertController, NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the ServiceForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ServiceFormPage = (function () {
    function ServiceFormPage(navCtrl, builder, loadingController, navParams, alertController, ds) {
        this.navCtrl = navCtrl;
        this.builder = builder;
        this.loadingController = loadingController;
        this.navParams = navParams;
        this.alertController = alertController;
        this.ds = ds;
        this._formData = this.navParams.data;
        this.serviceForm = this.builder.group({
            sTitle: [this._formData.serviceTitle, Validators.required],
            sDescription: [this._formData.serviceDesc, Validators.required],
            sDate: [this.sDate, Validators.required],
            sSkillSets: [this._formData.skillSets, Validators.required],
            sLocation: [this._formData.serviceLocation],
            sTeamSize: [this._formData.teamSize]
        });
    }
    ServiceFormPage.prototype.ionViewDidLoad = function () {
        this.sDate = (this._formData) ? this._formData.serviceStartDate : new Date().toISOString();
        this.title = (this._formData) ? "Service" : "New Service";
        this.setLoadingCtrl();
        console.log('Hello ServiceFormPage Page');
    };
    ServiceFormPage.prototype.onSubmit = function (formData) {
        var _this = this;
        console.log(formData.value);
        var stitle = formData.sTitle;
        var sdate = formData.sDate;
        var sdesc = formData.sDescription;
        var sskillSets = formData.sSkillSets;
        var sloc = formData.sLocation;
        var steamSize = formData.sTeamSize;
        console.log('Date: ' + sdate);
        this.loadingCtrl.present().then(function () {
            var newService = _this.ds.addServiceDtl(stitle, sdate, sdesc, sskillSets, sloc, steamSize);
            newService.then(function (_data) {
                if (_data) {
                    _this.ds.addUserServices(newService.key);
                    _this.navCtrl.pop();
                }
            }).catch(function (err) {
            });
        });
    };
    ServiceFormPage.prototype.onClickCancel = function () {
        this.navCtrl.pop();
    };
    ServiceFormPage.prototype.setLoadingCtrl = function () {
        this.loadingCtrl = this.loadingController.create({
            content: 'Publishing the new service',
            dismissOnPageChange: true
        });
    };
    ServiceFormPage.prototype.uploadSevericeLogo = function () {
    };
    ServiceFormPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-service-form',
                    templateUrl: 'service-form.html'
                },] },
    ];
    /** @nocollapse */
    ServiceFormPage.ctorParameters = [
        { type: NavController, },
        { type: FormBuilder, },
        { type: LoadingController, },
        { type: NavParams, },
        { type: AlertController, },
        { type: DataService, },
    ];
    return ServiceFormPage;
}());
//# sourceMappingURL=service-form.js.map