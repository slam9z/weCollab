import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class DataService {
    
    data: FirebaseListObservable<any>;

    constructor(private af: AngularFire, private storage: Storage ){
   
    }

    addService(title: string, date: string, desc: string, skillSets: string, loc: string, size:string){
        var serviceUrl = this.af.database.list('/serviceDtl');
        var addItem = serviceUrl.push({
                serviceTitle: title,
                serviceStartDate: date,
                serviceDesc: desc,
                skillSets: skillSets,
                serviceLocation: loc,
                teamSize: size
        });
        var sId = addItem.key;
        console.log('addService ky' + sId);
        addItem.then((_data) => {
            
            console.log(JSON.stringify(_data))
            //this.dismiss()
        }).catch((_error) => {
            console.log(_error)
        })
      
            //console.log('serv: ' + JSON.stringify(serv));
        
       
    }

}