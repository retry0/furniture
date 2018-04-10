import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {User} from "../../model/user";
import {UserProvider} from "../../providers/user/user";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private  userlist: User[] = [];

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider) {

  }

  ngOnInit(){
    this.loadUser();
  }
  loadUser(){
    this.userlist = [];
    this.userProvider.loadUser()
      .subscribe((result)=>{
        console.log(result);
      });
    console.log(this.userlist);
  }

}
