import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the Me page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var MePage = (function () {
    function MePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MePage.prototype.ionViewDidLoad = function () {
        console.log('Hello MePage Page');
    };
    MePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-me',
                    templateUrl: 'me.html'
                },] },
    ];
    /** @nocollapse */
    MePage.ctorParameters = [
        { type: NavController, },
    ];
    return MePage;
}());
//# sourceMappingURL=me.js.map