import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../../providers/providers';
import { LoadingController, AlertController, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ServiceForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-service-form',
  templateUrl: 'service-form.html'
})
export class ServiceFormPage {

  isFavorited: boolean;
  title: String;
  sDate: String ;
  serviceForm: FormGroup;
  loadingCtrl: any;
  _formData: any;
  constructor(public navCtrl: NavController,
              private builder: FormBuilder, 
              public loadingController: LoadingController,
              public navParams: NavParams,
              public alertController: AlertController,
              private ds: DataService) {
                this._formData = this.navParams.data;
                this.serviceForm = this.builder.group({
                       sTitle: [this._formData.serviceTitle, Validators.required],
                       sDescription: [this._formData.serviceDesc, Validators.required],
                       sDate :[this.sDate, Validators.required],
                       sSkillSets: [this._formData.skillSets, Validators.required],
                       sLocation: [this._formData.serviceLocation],
                       sTeamSize: [this._formData.teamSize]
                      });

              }

  ionViewDidLoad() {
    
    this.sDate = (this._formData)? this._formData.serviceStartDate : new Date().toISOString();
    this.title = (this._formData)? "Service" : "New Service";
    this.setLoadingCtrl();
    console.log('Hello ServiceFormPage Page');
  }

  onSubmit(formData){
      console.log(formData.value);
      let stitle = formData.sTitle;
      let sdate = formData.sDate;
      let sdesc = formData.sDescription;
      let sskillSets = formData.sSkillSets;
      let sloc = formData.sLocation;
      let steamSize = formData.sTeamSize;
      console.log('Date: ' + sdate);
      this.loadingCtrl.present().then(() => {
        var newService = this.ds.addServiceDtl(stitle,sdate,sdesc,sskillSets,sloc,steamSize);
        newService.then((_data) => { 
          if (_data) {
            this.ds.addUserServices(newService.key);
            this.navCtrl.pop();
          }
        }).catch((err) => {

        });
      })
  }

  onClickCancel(){
    this.navCtrl.pop();
  }
  
  private setLoadingCtrl(){
    this.loadingCtrl = this.loadingController.create({
      content: 'Publishing the new service',
      dismissOnPageChange: true
    });
  }

  private uploadSevericeLogo(){

  }
}
