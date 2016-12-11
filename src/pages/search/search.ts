import { Component, ViewChild } from '@angular/core';
import { NavController, Searchbar } from 'ionic-angular';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { DataService } from '../../providers/providers';
import { IServiceDtl } from '../../models/models';
import { ServiceFormPage } from '../../pages/pages';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
 
  queryKeyword: string;
  resultsList: Observable<any>;
  allServiceDtlList: FirebaseListObservable<IServiceDtl[]>;
  allUserServiceList: any;

  constructor(public navCtrl: NavController,
    private ds: DataService) {
    this.queryKeyword = "";
    
    this.allServiceDtlList = this.ds.getAllServiceDtlList();
    this.allUserServiceList  = this.ds.getServiceListByUid();
    this.onSearch();
  }
  isShow(res){
    var creator: string = res.creator;
    var title: string = res.serviceTitle;
    var desc: string = res.serviceDesc;
    let isCreator, isTitle,isDescription =false;
    if (creator  && creator.includes(this.queryKeyword))
      isCreator= true;

    if (title  && title.includes(this.queryKeyword))
      isTitle= true;

    if (desc  && desc.includes(this.queryKeyword))
      isDescription= true;

    return isCreator || isTitle || isDescription;
  }
  ionViewDidLoad() {
    console.log('Hello SearchPage Page');
  }
  onSearch() {
    this.filterByKeyword(this.queryKeyword);
  }

  filterByKeyword(queryText) {
    queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
  }

  onCardClick($event, serviceDtlObj){

    var userServiceKey: any;
    //console.log(serviceDtlObj);
     this.allUserServiceList.then(_n => _n.map( 

        item => {return item.filter(item.serviceDtlId === serviceDtlObj.$key)}
        
       ));
     serviceDtlObj.userServiceKey = '';
        serviceDtlObj.isFavorite = '';
        serviceDtlObj.isNew = false;
        console.log(serviceDtlObj);
        this.navCtrl.push(ServiceFormPage, serviceDtlObj);
  }
}
