import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ApiService } from './service/api/api.service';
import { GoogleLoginService } from './service/googleLogin/google-login-service.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import { Contacts } from '@ionic-native/contacts';
import { Contacts } from '@ionic-native/contacts/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { AngularFirestoreModule } from '@angular/fire/firestore';
// firebase imports, omit what you don't need for your app
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

// environment
import { environment } from '../environments/environment';
import * as firebase from 'firebase';
firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    Screenshot,
    BarcodeScanner,
    Toast,
    Contacts,
    GoogleLoginService,
    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
