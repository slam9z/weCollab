import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../../providers/providers';
import { LoadingController, AlertController, NavController } from 'ionic-angular';


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

  sDate: String ;
  serviceForm: FormGroup;
  
  constructor(public navCtrl: NavController,
              private builder: FormBuilder, 
              public loadingController: LoadingController,
              public alertController: AlertController,
              private ds: DataService) {
                
                this.serviceForm = this.builder.group({
                       sTitle: ['', Validators.required],
                       sDescription: ['', Validators.required],
                       sDate :['', Validators.required],
                       sSkillSets: ['', Validators.required],
                       sLocation: [''],
                       sTeamSize: ['']
                      });

              }
  

  ionViewDidLoad() {
    this.sDate = new Date().toISOString();
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
      this.ds.addService(stitle,sdate,sdesc,sskillSets,sloc,steamSize);
            
    
  }

  onCreateLoadingCtrl(){

  }
}
