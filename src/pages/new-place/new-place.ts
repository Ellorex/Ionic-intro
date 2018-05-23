import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PlaceProvider } from './../../providers/place/place';

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  place: string ="";
  coords = { lat: 0, lon: 0};

  constructor(
    public navCtrl: NavController, 
    private placeProvider: PlaceProvider,
    private geolocation: Geolocation,
    ){
  }

  savePlace(f) {
    console.log(this.placeProvider.addPlace(f.value.place));
  }

  locate() {
    this.geolocation.getCurrentPosition().then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lon = res.coords.longitude; 
      console.log('ok');
    })
  }

}
