import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Furniture} from "../../model/furniture";
import {FurnitureProvider} from "../../providers/furniture/furniture";
import {containerStart} from "@angular/core/src/render3/instructions";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  furnitureList : Furniture[] =[];
  categorySelected = "1";

  constructor(public navCtrl: NavController,
              public furnitureProvider: FurnitureProvider) {

  }

  ngOnInit(){
    this.loadFurniture();
  }

  loadFurniture(){
    this.furnitureList = [];
    this.furnitureProvider.loadFurniture(this.categorySelected)
      .subscribe((result)=>{
        console.log(result);
        this.furnitureList = result;
      });
  }
}
