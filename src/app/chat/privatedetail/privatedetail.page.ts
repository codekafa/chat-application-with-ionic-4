import { Component, OnInit } from '@angular/core';
import { PrivateService } from 'src/app/api/private.service';
import { ActivatedRoute } from '@angular/router';
import { UserMessageModel } from 'src/app/models/UserMessageModel';

@Component({
  selector: 'app-privatedetail',
  templateUrl: './privatedetail.page.html',
  styleUrls: ['./privatedetail.page.scss'],
})
export class PrivatedetailPage implements OnInit {

  private id : number;
  private messages : UserMessageModel[] = [] ;
  private nickname : string = "test2";

  constructor(private privateService:PrivateService,private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.id);
    console.log(this.messages);
    this.route.params.subscribe( params => this.id = params[0]);

    this.messages.push(new UserMessageModel(1,"test1","test2","Hi!"));
    this.messages.push(new UserMessageModel(2,"test2","test1","Hi bro!"));
    this.messages.push(new UserMessageModel(3,"test1","test2","How are you?"));
    this.messages.push(new UserMessageModel(4,"test1","test2","How can i help you?"));
    this.messages.push(new UserMessageModel(5,"test1","test2","bro?"));
    this.messages.push(new UserMessageModel(6,"test2","test2","Sorry..."));
    this.messages.push(new UserMessageModel(7,"test2","test2","wtf:"));
    this.messages.push(new UserMessageModel(8,"test2","test2",":SSSS"));
    this.messages.push(new UserMessageModel(1,"test1","test2","Hi!"));
    this.messages.push(new UserMessageModel(2,"test2","test1","Hi bro!"));
    this.messages.push(new UserMessageModel(3,"test1","test2","How are you?"));
    this.messages.push(new UserMessageModel(4,"test1","test2","How can i help you?"));
    this.messages.push(new UserMessageModel(5,"test1","test2","bro?"));
    this.messages.push(new UserMessageModel(6,"test2","test2","Sorry..."));
    this.messages.push(new UserMessageModel(7,"test2","test2","wtf:"));
    this.messages.push(new UserMessageModel(8,"test2","test2",":SSSS"));
   
  }

  getUserMessages()
  {
    console.log(this.id);
    console.log(this.messages);
    return this.messages;
  }




}
