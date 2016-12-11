import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ServiceFormPage } from '../../pages/pages';
import { DataService } from '../../providers/providers';
import { FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/filter';

/*
  Generated class for the MyServices page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-services',
  templateUrl: 'my-services.html'
})
export class MyServicesPage {

  allUserServiceList: FirebaseListObservable<any[]>;
  allServiceList : any;
  resultsList: any;
  test : any;
  segment: string;
  constructor(public navCtrl: NavController,
              private ds:DataService) {
      //this.allUserServiceList = this.ds.getServiceListByUid();
      this.allServiceList = this.ds.getServiceList();
      if (this.segment === undefined || this.segment === null){
        this.segment = "all";
        this.onChangeSegment(this.segment);
        
      }
  }

  ionViewDidLoad() {
    console.log('Hello MyServicesPage Page');
  }

  newService(){
    this.navCtrl.push(ServiceFormPage);
  }
  onCardClick($event, serviceDtlObj){
    this.navCtrl.push(ServiceFormPage, serviceDtlObj);
   
  }

  onChangeSegment(category: string){
    this.segment = category;
    if (this.segment === "favorites"){
        this.resultsList = this.allServiceList.filter(e => e.isFavorite === true);
    }else{
        this.resultsList = this.allServiceList;
    }
  }

  onInput($event){

  }
  onCancel($event){
    
  }
}
