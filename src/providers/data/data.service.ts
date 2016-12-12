import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { firebaseConfig } from '../../environment/firebase.config'
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
    
    private currentUser: any;
    data: FirebaseListObservable<any>;
    baseUrl: string;
    constructor(private http: Http,private af: AngularFire, private storage: Storage ){
        this.currentUser = this.af.auth.getAuth().uid;
        this.baseUrl = firebaseConfig.databaseURL;
    }

    getCurrentUser(){
        return this.currentUser;
    }
    getServiceListByUid(){
        //'/userService/'+ this.currentUser+'/service'

        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/userService/${this.currentUser}/service.json`)
                .subscribe(res => resolve(res.json()));
        });
       
    } 

    getAllServiceDtlList(){
        return this.af.database.list('/serviceDtl');
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
           serviceListObj.subscribe(snap => { snap
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

    removeServiceDtl(serviceDtlUid: string, userServiceUid: string){
        var del: firebase.Promise<void>;
        this.af.database.list('/userService/'+ this.currentUser+'/service/' + userServiceUid).remove();
        del = this.af.database.list('/serviceDtl/'+ serviceDtlUid).remove();
        return del;

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

    updateServiceFavorite(userServiceUid: string, isFav: boolean){
        
       return this.af.database.object('/userService/'+ this.currentUser+'/service/'+userServiceUid)
                .update({
                    isFavorite: isFav
                });
    }
    updateServiceDtl(serviceDtlUid: string,title: string, date: string, desc: string, skillSets: string, loc: string, size:string){
       
       return this.af.database.object('/serviceDtl/'+ serviceDtlUid)
                .update({
                    serviceTitle: title,
                    serviceStartDate: date,
                    serviceDesc: desc,
                    skillSets: skillSets,
                    serviceLocation: loc,
                    teamSize: size,
                    
                    timestamp: Date.now()
               
                });
    }
    queryServiceDtlByKeyWord(){

    }

    getCurrentUserInfo(){


          return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/userProfile/${this.currentUser}.json`)
                .subscribe(res => {
                    //console.log(res.json());
                    resolve(res.json())
                });
        });
    }

    public logout() {
       
        this.af.auth.logout();
    }
}