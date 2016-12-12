import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage, RegisterPage, HomePage, MePage, MessagePage, NotificationPage, MyServicesPage, ServiceFormPage, UserProfilePage,SearchPage} from '../pages/pages';
import { ControlMessageComponent } from '../components/components';
import { ValidationService, UsersService, DataService } from '../providers/providers';
import { Ionic2RatingModule } from 'ionic2-rating';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environment/firebase.config';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
     MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    MePage, 
    MessagePage, 
    NotificationPage, 
    MyServicesPage,
    ServiceFormPage,
    SearchPage,
    UserProfilePage,
    ControlMessageComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    MePage, 
    MessagePage, 
    NotificationPage, 
    MyServicesPage,
    ServiceFormPage,
    SearchPage,
    UserProfilePage,
    ControlMessageComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler }, 
              ValidationService, DataService,  UsersService, Storage]})
export class AppModule {}
