import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceFormPage } from '../../pages/pages';
import { DataService } from '../../providers/providers';
import 'rxjs/add/operator/filter';
/*
  Generated class for the MyServices page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var MyServicesPage = (function () {
    function MyServicesPage(navCtrl, ds) {
        this.navCtrl = navCtrl;
        this.ds = ds;
        //this.allUserServiceList = this.ds.getServiceListByUid();
        this.allServiceList = this.ds.getServiceList();
        if (this.segment === undefined || this.segment === null) {
            this.segment = "all";
            this.onChangeSegment(this.segment);
        }
    }
    MyServicesPage.prototype.ionViewDidLoad = function () {
        console.log('Hello MyServicesPage Page');
    };
    MyServicesPage.prototype.newService = function () {
        this.navCtrl.push(ServiceFormPage);
    };
    MyServicesPage.prototype.onCardClick = function ($event, serviceDtlObj) {
        this.navCtrl.push(ServiceFormPage, serviceDtlObj);
    };
    MyServicesPage.prototype.onChangeSegment = function (category) {
        this.segment = category;
        if (this.segment === "favorites") {
            this.resultsList = this.allServiceList.filter(function (e) { return e.isFavorite === true; });
        }
        else {
            this.resultsList = this.allServiceList;
        }
    };
    MyServicesPage.prototype.onInput = function ($event) {
    };
    MyServicesPage.prototype.onCancel = function ($event) {
    };
    MyServicesPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-my-services',
                    templateUrl: 'my-services.html'
                },] },
    ];
    /** @nocollapse */
    MyServicesPage.ctorParameters = [
        { type: NavController, },
        { type: DataService, },
    ];
    return MyServicesPage;
}());
//# sourceMappingURL=my-services.js.map