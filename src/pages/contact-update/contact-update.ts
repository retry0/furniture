import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {User} from "../../model/user";

/**
 * Generated class for the ContactUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-update',
  templateUrl: 'contact-update.html',
})
export class ContactUpdatePage {
//deklars variable
  private userlist: User[] = [];
  private useremail: string = "";
  private userpassword: string = "";
  private name: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private  userProvider: UserProvider) {

    /* //inject variabel
     var data = navParams.data;
     this.userid = data.userid;
     this.useremail = data.useremail;
     this.userpassword = data.userpassword;
     this.name = data.name;
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad ContactUpdatePage');
   }

   //function update user
   updateUser(){
     //variabel data yang berisi user password dan name
     var data ={
       "userpassword": this.userpassword,
       "name": this.name
     }
   }


 */
  }
}
