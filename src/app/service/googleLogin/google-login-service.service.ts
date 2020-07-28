import { Injectable } from '@angular/core';
// import {  Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { BASE_SERVER } from '../../../environments/environment';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {

  user: any;

  constructor(private http: HttpClient,
    private google: GooglePlus) { }

  async loginGoogle() 
  {
    return new Promise<any>((resolve, reject) => {

      this.google.login({})
      .then(res => {
        console.log(res);
        resolve(res);
        //     // this.http.post(BASE_SERVER+'/socialLogin', userServer)
        //     // .subscribe((response) => {
        //     //   resolve(response.json());
        //     // },err => reject(err));
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });

    });
  }
    
}
