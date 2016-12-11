import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyServicesPage, MessagePage, NotificationPage, MePage } from '../../pages/pages';
/*
  Generated class for the Home tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = MyServicesPage;
        this.tab2Root = MessagePage;
        this.tab3Root = NotificationPage;
        this.tab4Root = MePage;
    }
    HomePage.prototype.onInput = function ($event) {
    };
    HomePage.prototype.onCancel = function ($event) {
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
    ];
    return HomePage;
}());
//# sourceMappingURL=home.js.map