import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
export var UsersService = (function () {
    function UsersService(af, storage) {
        this.af = af;
        this.storage = storage;
        this.auth = af.auth;
    }
    UsersService.prototype.login = function (userEmail, userPassword) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.login({
                email: userEmail,
                password: userPassword
            }, {
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            }).then(function (userData) {
                _this.setCurrentUser(userData.uid);
                resolve(userData);
            }, function (err) { return reject(err); });
        });
    };
    UsersService.prototype.register = function (fname, lname, email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.createUser({ email: email, password: password })
                .then(function (newUser) {
                if (newUser) {
                    _this.setCurrentUser(newUser.uid);
                    var itemObservable = _this.af.database.object('/userProfile/' + newUser.uid);
                    itemObservable.set({
                        fname: fname,
                        lname: lname,
                        email: email,
                        status: "A",
                        lastLoginDTTM: new Date().toLocaleString()
                    });
                }
                resolve(newUser);
            }).catch(function (err) { return reject(err); });
        });
    };
    UsersService.prototype.logout = function () {
        this.storage.remove('userId');
        this.auth.logout();
    };
    UsersService.prototype.setCurrentUser = function (uid) {
        this.storage.set('userId', uid);
        this.currentUser = uid;
    };
    UsersService.prototype.getCurrentUser = function () {
        return this.storage.get('userId').then(function (value) {
            return value;
        });
    };
    UsersService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UsersService.ctorParameters = [
        { type: AngularFire, },
        { type: Storage, },
    ];
    return UsersService;
}());
//# sourceMappingURL=users.service.js.map