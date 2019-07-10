import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  public register(params: Form): ResponseModel {
    console.log(params);
    return new ResponseModel();
  }

  public login({ email, password }: { email: string; password: string; }): ResponseModel {
    console.log(email); console.log(password);
    return new ResponseModel();
  }

  public approveMember(password:string):ResponseModel
  {
    console.log(password); 
    return new ResponseModel();
  }

}
