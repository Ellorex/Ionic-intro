import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class PlaceProvider {

  places: string[] = [];

  constructor(private storage: Storage) {
  }

  setPlaces(places: string []) {
    this.places = places;
  }
  getPlaces(): any {
   // return this.places;
    return this.storage.get('places');
  }

  addPlace(place: string) {
    this.places.push(place);
    this.storage.set('places', this.places);
    // return this.places.slice(); 
  }

}
