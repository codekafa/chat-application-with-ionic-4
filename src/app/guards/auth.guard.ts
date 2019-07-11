
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../api/auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(public auth: AuthService) {}
 
  canActivate(): boolean {
    return true;
    return this.auth.isLoggedIn();
  }
}