import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/map';
export var DataService = (function () {
    function DataService(af, storage) {
        this.af = af;
        this.storage = storage;
        this.currentUser = this.af.auth.getAuth().uid;
    }
    DataService.prototype.getServiceListByUid = function () {
        return this.af.database.list('/userService/' + this.currentUser + '/service');
    };
    DataService.prototype.getServiceList = function () {
        var _this = this;
        var serviceListObj = this.af.database
            .list('/userService/' + this.currentUser + '/service').map(function (items) {
            return items.map(function (item) {
                _this.af.database.object('/serviceDtl/' + item.serviceDtlId)
                    .forEach(function (dtl) {
                    item.dtl = dtl;
                    return dtl;
                });
                return item;
            });
        });
        return serviceListObj;
    };
    DataService.prototype.addServiceDtl = function (title, date, desc, skillSets, loc, size) {
        var serviceUrl = this.af.database.list('/serviceDtl');
        var addItem = serviceUrl.push({
            serviceTitle: title,
            serviceStartDate: date,
            serviceDesc: desc,
            skillSets: skillSets,
            serviceLocation: loc,
            teamSize: size,
            status: "A",
            timestamp: Date.now(),
            creator: this.currentUser
        });
        return addItem;
    };
    DataService.prototype.addUserServices = function (serviceDtlId) {
        var teamUid = this.addServiceTeam(serviceDtlId, this.currentUser).key;
        var userServiceUrl = this.af.database.list('/userService/' + this.currentUser + '/service');
        return userServiceUrl.push({
            serviceDtlId: serviceDtlId,
            teamId: teamUid,
            isFavorite: false
        });
    };
    DataService.prototype.addServiceTeam = function (serviceDtlId, member) {
        var serviceTeamUrl = this.af.database.list('/serviceTeam/');
        return serviceTeamUrl.push({
            serviceDtlId: serviceDtlId,
            teamMembers: member
        });
    };
    DataService.prototype.updateServiceTeam = function (serviceDtlId) {
    };
    DataService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DataService.ctorParameters = [
        { type: AngularFire, },
        { type: Storage, },
    ];
    return DataService;
}());
//# sourceMappingURL=data.service.js.map