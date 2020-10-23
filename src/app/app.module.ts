import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LaunchesComponent } from './launches/launches.component';
import { RocketComponent } from './rocket/rocket.component';
import { LinksComponent } from './links/links.component';
import { FirststageComponent } from './firststage/firststage.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    RocketComponent,
    LinksComponent,
    FirststageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
