import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    
    private currentUser: any;
    data: FirebaseListObservable<any>;

    constructor(private af: AngularFire, private storage: Storage ){
        this.currentUser = this.af.auth.getAuth().uid;
    }

    getServiceListByUid(){
         return  this.af.database.list('/userService/'+ this.currentUser+'/service');
     
    }

     getServiceList(){
         var serviceListObj = this.af.database
                              .list('/userService/'+ this.currentUser+'/service').map(
                                  (items) => {
                                    return  items.map(item => {
                                         this.af.database.object('/serviceDtl/'+ item.serviceDtlId)
                                                    .forEach((dtl) => {
                                                        item.dtl = dtl;
                                                        return dtl;
                                                    });
                                        return item;
                                    });
                                  });
         return serviceListObj;
     }

    addServiceDtl(title: string, date: string, desc: string, skillSets: string, loc: string, size:string){
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
       
    }
    addUserServices(serviceDtlId: string){
        var teamUid = this.addServiceTeam(serviceDtlId,this.currentUser).key;
        var userServiceUrl = this.af.database.list('/userService/' + this.currentUser+'/service');
        return userServiceUrl.push({ 
                                    serviceDtlId: serviceDtlId,
                                    teamId: teamUid,
                                    isFavorite: false
                            });
    }

    addServiceTeam(serviceDtlId: string, member: string){
        var serviceTeamUrl = this.af.database.list('/serviceTeam/');
        return serviceTeamUrl.push({
                 serviceDtlId: serviceDtlId,
                 teamMembers: member
            });
    }

    updateServiceTeam(serviceDtlId: string){

    }


}