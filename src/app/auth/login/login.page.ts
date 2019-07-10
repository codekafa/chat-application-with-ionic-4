import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
  }


  login(form) {
    var result = this.authService.login(form.value);
    result.success = true;
    if (result.success) {
      this.router.navigateByUrl('/rooms');
    }
  }

}
