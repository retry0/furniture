import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {User} from "../../model/user";
import {UserProvider} from "../../providers/user/user";
import{ContactUpdatePage} from "../contact-update/contact-update";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  //deklars variable
  private  userlist: User[] = [];
  private  useremail: string="";
  private  userpassword: string="";
  private name:string="";

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider,
              private modalCtrl: ModalController) {

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

  addUser(){
    console.log("adduser");
    //variable data berisi useremail, userpassword dan name yang dipanggil dari variable yang sudah dideklarsikan
    var data ={
      "useremail": this.useremail,
      "userpassword": this.userpassword,
      "name": this.name
    }

    console.log(data);

    this.userProvider.addUser(data).subscribe((result)=>{
      console.log(result);
      this.loadUser();
    });
  }

  //delete user dengan object user id
  deleteUser(userid){
    //memanggil user provider function delete user
    this.userProvider.deleteUser(userid).subscribe((result)=>{
      console.log(result);
      this.loadUser();
    });
  }

  //pop up update user use modal
  viewUser(data){
    var modal = this.modalCtrl.create(ContactUpdatePage, data)
    modal._onDidDismiss(()=>{
      this.loadUser();
    })
    modal.present();
  }



}
