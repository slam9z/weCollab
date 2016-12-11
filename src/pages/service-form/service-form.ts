import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../../providers/providers';
import { LoadingController, AlertController, ToastController, NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';

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

  public base64Image: string;
  isFavorited: boolean;
  isCreator: boolean;
  isAllowJoin: boolean;
  title: String;
  sDate: String;
  serviceForm: FormGroup;
  loadingCtrl: any;
  _formData: any;
  isNewForm: boolean;
  operatorType: string;

  constructor(public navCtrl: NavController,
              private builder: FormBuilder,
              public loadingController: LoadingController,
              public navParams: NavParams,
              public alertController: AlertController,
              private ds: DataService,
              public toastController: ToastController) {
    this._formData = this.navParams.data;
    this.serviceForm = this.builder.group({
      sTitle: [this._formData.serviceTitle, Validators.required],
      sDescription: [this._formData.serviceDesc, Validators.required],
      sDate: [this.sDate, Validators.required],
      sSkillSets: [this._formData.skillSets, Validators.required],
      sLocation: [this._formData.serviceLocation],
      sTeamSize: [this._formData.teamSize]
    });

  }

  ionViewDidLoad() {
    this.init();
    console.log('Hello ServiceFormPage Page');
  }
  init() {
    //console.log(this._formData.creator + " == " + this.ds.getCurrentUser());
    this.isNewForm = this._formData.isNew;
    this.sDate = (!this.isNewForm) ? this._formData.serviceStartDate : new Date().toISOString();
    this.title = (!this.isNewForm) ? "Service" : "New Service";
    this.isFavorited = (this._formData.isFavorite);

    this.isCreator = (this.ds.getCurrentUser() === this._formData.creator) ? true : false;
    this.operatorType = !this.isNewForm ? "Update" : "New"
    var msg = this.isNewForm ? "Publishing the new service" : "Updateing the service";
    this.setLoadingCtrl(msg);
  }

  onSubmit(formData) {
    //console.log(formData.value);
    let stitle = formData.sTitle;
    let sdate = formData.sDate;
    let sdesc = formData.sDescription;
    let sskillSets = formData.sSkillSets;
    let sloc = formData.sLocation;
    let steamSize = formData.sTeamSize;

    if (this.isNewForm) {
      this.addNewService(stitle, sdate, sdesc, sskillSets, sloc, steamSize);
    } else {
      this.updateService(this._formData.$key, stitle, sdate, sdesc, sskillSets, sloc, steamSize);
    }

  }

  private addNewService(stitle: string, sdate: string, sdesc: string, sskillSets: string, sloc: string, steamSize: string) {
    this.loadingCtrl.present().then(() => {

      var newService = this.ds.addServiceDtl(stitle, sdate, sdesc, sskillSets, sloc, steamSize);
      newService.then((_data) => {
        if (_data) {
          this.ds.addUserServices(newService.key);
          this.navCtrl.pop();
        }
      }).catch((err) => {

      });

    });
  }
  private updateService(key: string, stitle: string, sdate: string, sdesc: string, sskillSets: string, sloc: string, steamSize: string) {
    this.loadingCtrl.present().then(() => {

      var newService = this.ds.updateServiceDtl(key, stitle, sdate, sdesc, sskillSets, sloc, steamSize);
      newService.then((_data) => {
        this.navCtrl.pop();
        let toastMsg = this.toastController.create({
          message: 'The service information is updated!',
          duration: 2000,
          position: 'botton'
        });
        toastMsg.present();
      }).catch((err) => {

      });

    });
  }

  onClickCancel() {
    this.navCtrl.pop();
  }

  private setLoadingCtrl(msg: string) {

    this.loadingCtrl = this.loadingController.create({
      content: msg,
      dismissOnPageChange: true
    });
  }

  uploadSevericeLogo() {

  }

  takePicture() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

 
  toggleFav() {
    this.isFavorited = !this.isFavorited;
    this.ds.updateServiceFavorite(this._formData.userServiceKey, this.isFavorited);
  }
  
  onClickJoin(){
    
  }  
  onClickRemove() {
    let alertConfirm = this.alertController.create({
      title: 'Delete',
      message: 'Are you sure you want to delete this service?',
      buttons: [{
        text: 'Yes',
        handler: () => {

          //console.log(this._formData.$key+ " / " + this._formData.userServiceKey );
          this.ds.removeServiceDtl(this._formData.$key, this._formData.userServiceKey).then(() => {
            this.navCtrl.pop();
            let toastMsg = this.toastController.create({
              message: 'The service is deleted!',
              duration: 2000,
              position: 'botton'
            });
            toastMsg.present();

          });


        }
      },
      {
        text: 'No'
      }
      ]
    });
    alertConfirm.present();
  }


}
