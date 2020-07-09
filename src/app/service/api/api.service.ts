import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_SERVER, environment } from '../../../environments/environment';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  loginUser(users){
    return this.http.post(BASE_SERVER+'/loginUser', users)
    .pipe(map(res => res));
  }

  registerUser(users){
    return this.http.post(BASE_SERVER+'/createUser', users)
    .pipe(map(res => res));
  }

  cardAdd(data){
    return this.http.post(BASE_SERVER+'/createCard', data)
    .pipe(map(res => res));
  }

  getCards(userId){

    var data = {
      userId: userId
    };
    return this.http.post(BASE_SERVER+'/getAllUserCards', data)
    .pipe(map(res => res));
  }
}
