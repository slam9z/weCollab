import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage, RegisterPage, HomePage, MePage, MessagePage, NotificationPage, MyServicesPage } from '../pages/pages';
import { ControlMessageComponent } from '../components/components';
import { ValidationService, UsersService } from '../providers/providers';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environment/firebase.config';


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
    ControlMessageComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
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
    ControlMessageComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler }, ValidationService, UsersService]})
export class AppModule {}
