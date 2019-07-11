import { Component, OnInit } from '@angular/core';
import { PrivateService } from 'src/app/api/private.service';
import { PrivateUserModel } from 'src/app/models/PrivateUserModel';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.page.html',
  styleUrls: ['./private.page.scss'],
})
export class PrivatePage implements OnInit {

  title: string = "Kullanıcılar"
  private users: PrivateUserModel[];
  constructor(private privateService: PrivateService,private router:Router) {

  }

  ngOnInit() {
    this.getUsers();
  }


  public getUsers() {
    this.privateService.getPrivateChatUsers().subscribe((res: any[]) => this.users = res["data"]);
  }

  public selectUser(user:PrivateUserModel)
  {
     
    if (user != null)
    {
      this.router.navigateByUrl("/privatedetail/id="+user.id);
    }

  } 


}
