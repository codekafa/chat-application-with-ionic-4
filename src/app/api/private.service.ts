import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrivateUserModel } from '../models/PrivateUserModel';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

const TOKEN_KEY: string = 'ACCESS_TOKEN';
const API_ADDRESS: string = 'https://reqres.in/api';

@Injectable({
  providedIn: 'root'
})
export class PrivateService {

  constructor(private httpClient: HttpClient) { }

  getPrivateChatUsers() {
    const url = `${API_ADDRESS}/users`;
    return this.httpClient.get(url);
  }

  getPrivateDetails(user:PrivateUserModel)
  {
    const url = `${API_ADDRESS}/users`;
  }

}
