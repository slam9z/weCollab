import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
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

  sDate: any;
  serviceForm: FormGroup;
  
  constructor(public navCtrl: NavController,
              private formBuilder: FormBuilder, 
              public loadingController: LoadingController,
              public alertController: AlertController) {
                this.serviceForm = formBuilder.group({

                       sTitle: ['', Validators.required],
                       sDescription: ['', Validators.required],
                       sDate :['', Validators.required],
                      });

              }

  ionViewDidLoad() {
    console.log('Hello ServiceFormPage Page');
  }
  onSubmit(formData){

  }
}
