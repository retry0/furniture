import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs';
//memanggil model furniture
import {Furniture} from "../../model/furniture";

/*
  Generated class for the FurnitureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FurnitureProvider {
  //deklarsi variable funitureist sama dengan furniture kemudian ditampung
  private  furnitureList: Furniture[] =[];
  constructor(public http: Http) {
    console.log('Hello FurnitureProvider Provider');
  }

  //function mengload furniture dengan object cat_id
  loadFurniture(cat_id:string){
    //mengambil url http + object_id
    return this.http.get("http://localhost:8081/api/category" +cat_id + "/furniture")
      .map((response: Response)=>{
        // deklarsi data sama dengan varible response yang merupakan json
        let data = response.json();
        //pengulangan variabel elem dai variabel data
        for (let elem of data){
          //untuk gambar
          elem.images = elem.images.split(",");
        }
        //memaggil variabel furniture list sama dengan data
        this.furnitureList = data;
        return data;
      },
        //console untuk error
        (error)=> console.log(error)
      );
  }
}
