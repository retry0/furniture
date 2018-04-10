import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs';
import{User} from "../../model/user";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  private userList: User[] = [];

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  loadUser(){
    return this.http.get("http://localhost:8081/api/user")
      .map((response: Response)=>{
        let data = response.json();
        this.userList = data;
        return data;
      },
        (error)=>console.log(error));
  }

}
