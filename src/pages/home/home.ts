import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlaceProvider } from './../../providers/place/place';
import { NewPlacePage } from './../new-place/new-place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message: string = "Tu peux le faire";
  places: string[] = [];

  constructor(
    public navCtrl: NavController,
    private PlaceProvider: PlaceProvider
  ){}

  btnTest() {
      this.message = "Bien ouej";
    }

  goToNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }
  ionViewDidLoad(){
    this.PlaceProvider.getPlaces().then(res => {
      if (!res) res = [];
      this.PlaceProvider.setPlaces(res);
    });
  }
  ionViewDidEnter(){
   this.PlaceProvider.getPlaces().then(res => {
     this.places = res;
   });
  }
     
}
