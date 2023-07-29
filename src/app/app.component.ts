import { Component, OnInit } from '@angular/core';
import { AppserviceService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularGeoFencing';
  location: any;
  locationJs: any;

constructor(private appservice:AppserviceService) {
  
}
 



ngOnInit() {

    this.appservice.getLocation().subscribe((responce)=>{
      console.log(responce);
      this.location=responce;     


    })
    navigator.geolocation.getCurrentPosition((position)=>{

      console.log(position);
      
      this.locationJs=position.coords;
        
    })



  }



}
