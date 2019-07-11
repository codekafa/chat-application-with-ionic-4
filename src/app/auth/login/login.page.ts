import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';
import { Router } from '@angular/router';
import { Notify } from 'src/app/operation/toastr';
import { NotificationService } from 'src/app/api/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router,private notfyService : NotificationService) { }

  ngOnInit() {
  }


  login(form) {
    var result = this.authService.login(form.value);
    result.success = true;
    if (result.success == true) {
      this.notfyService.successToast("Giriş işlemi başarılı.");
        this.router.navigateByUrl('/private');
    }else {
      this.notfyService.dangerToast("Kullanıcı bulunamadı! Lütfen bilgileri kontrol ederek tekrar deneyin!");
    }
  }

}
