import { Component, OnInit } from '@angular/core';
import { ResponseModel } from 'src/app/models/ResponseModel';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.page.html',
  styleUrls: ['./approve.page.scss'],
})
export class ApprovePage implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }


  approve(form){
    var result = this.authService.approveMember(form.value.password);
    result.success = true;
    if(result.success)
    {
      this.router.navigateByUrl('/rooms');
    }
  }

}
