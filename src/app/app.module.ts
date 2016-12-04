import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage, RegisterPage } from '../pages/pages';
import { ControlMessageComponent } from '../components/components';
import { ValidationService, UsersService } from '../providers/providers';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    ControlMessageComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    ControlMessageComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler }, ValidationService, UsersService]
})
export class AppModule {}
