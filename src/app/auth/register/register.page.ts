import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(form) {
    var result = this.authService.register(form.value);
    result.success = true;
    if (result.success) {
      this.router.navigateByUrl('/approve');
    }
  }



}
