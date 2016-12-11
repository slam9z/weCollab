import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the Notification page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var NotificationPage = (function () {
    function NotificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('Hello NotificationPage Page');
    };
    NotificationPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-notification',
                    templateUrl: 'notification.html'
                },] },
    ];
    /** @nocollapse */
    NotificationPage.ctorParameters = [
        { type: NavController, },
    ];
    return NotificationPage;
}());
//# sourceMappingURL=notification.js.map