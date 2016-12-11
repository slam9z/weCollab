import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { ServiceFormPage,SearchPage } from '../../pages/pages';
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
  allServiceList : Observable<any>;
  resultsList: Observable<any>;
  test : any;
  segment: string;
  constructor(public navCtrl: NavController,
              private ds:DataService) {
    
  }

  ionViewDidLoad() {
    this.allServiceList = this.ds.getServiceList();
      if (this.segment === undefined || this.segment === null){
        this.segment = "all";
        this.onChangeSegment(this.segment);
      }
    console.log('Hello MyServicesPage Page');
  }

  newService(){
    this.navCtrl.push(ServiceFormPage,{ isNew: true});
  }
  onCardClick($event, servKey, servFav, serviceDtlObj){
    


    serviceDtlObj.userServiceKey = servKey;
    serviceDtlObj.isFavorite = servFav;
    serviceDtlObj.isNew = false;
    this.navCtrl.push(ServiceFormPage, serviceDtlObj);
  }

  onChangeSegment(category: string){
    this.segment = category;
    if (this.segment === "favorites"){
        this.resultsList = this.allServiceList.map(a => a.filter(condition => condition.isFavorite ));
    }else{
        this.resultsList = this.allServiceList;
    }
  }

  goToSearch(){
    this.navCtrl.push(SearchPage);
  }

  
}
