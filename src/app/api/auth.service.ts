import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { ResponseModel } from '../models/ResponseModel';
import { HttpClient } from '@angular/common/http';
import { LoginUserModel } from '../models/LoginUserModel';
import { User } from '../models/User';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';


const TOKEN_KEY :string = 'ACCESS_TOKEN';
const API_ADDRESS: string = 'https://reqres.in/api';
@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private httpClient: HttpClient, private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }


  private _lgnModel = new LoginUserModel();
  private authSubject = new BehaviorSubject(false);
  private resultModel = new ResponseModel();
  private currentUserValue = new User();


  public register(params: Form): ResponseModel {
    console.log(params);
    return new ResponseModel();
  }

  public login({ email, password }: { email: string; password: string; }): ResponseModel {

    this._lgnModel.email = email;
    this._lgnModel.password = password;

    this.httpClient.post<User>(`${API_ADDRESS}/login`, this._lgnModel).subscribe(
      data => {

        if (data != null) {

          this.storage.set(TOKEN_KEY, data);
          this.authSubject.next(true);
          this.resultModel.result = "Üye girşi başarılı!";
          this.resultModel.success = true;
        } else {
          this.resultModel.result = "Üye girşi hatalı!Lütfen bilgilerinizi kontrol edin!";
          this.resultModel.success = false;
        }
      }
    );

    return this.resultModel;
  }

  async logout() {
    await this.storage.remove(TOKEN_KEY);
    this.authSubject.next(false);
  }

  public isLoggedIn():boolean {
    return this.authSubject.value;
  }

  public approveMember(password: string): ResponseModel {
    console.log(password);
    return new ResponseModel();
  }


  private checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authSubject.next(true);
      }
    })
  }
}
