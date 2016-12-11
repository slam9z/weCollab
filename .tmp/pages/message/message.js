import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the Message page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var MessagePage = (function () {
    function MessagePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('Hello MessagePage Page');
    };
    MessagePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-message',
                    templateUrl: 'message.html'
                },] },
    ];
    /** @nocollapse */
    MessagePage.ctorParameters = [
        { type: NavController, },
    ];
    return MessagePage;
}());
//# sourceMappingURL=message.js.map