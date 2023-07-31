import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-set',
  templateUrl: './location-set.component.html',
  styleUrls: ['./location-set.component.scss']
})
export class LocationSetComponent implements OnInit{

  locationCard: any;
locationObj: any;

// locationCard :boolean = false;
editAddress :boolean  = false
range: number = 100;
marker!: google.maps.Marker;
locationList: Array<any> = [];
deleteArray: Array<any> = [];


onAddressChange($event: Event) {
}
onChangeRangeMeter($event: Event) {
}
cancelLocation() {
}
addLocation() {
}
updateLocation() {
}
addressEdit(_t41: number) {
}
adressDelete(_t41: number) {
}
mapOptions: any;
onMapClick($event: Event) {
}
locations: any;
getCurrentLocation() {
}
saveLocation() {
}
addLocationBolean() {
}

constructor() {}
  ngOnInit(): void {

    
  }


}