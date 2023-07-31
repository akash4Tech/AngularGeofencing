import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationSetComponent } from './location-set/location-set.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from 'primeng/button';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
GoogleMap


@NgModule({
  declarations: [
    AppComponent,
    LocationSetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    GoogleMapsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
