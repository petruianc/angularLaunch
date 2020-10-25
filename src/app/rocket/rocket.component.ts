import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { LaunchServiceService } from '../launch-service.service';
import { Launch } from '../model/launch';
import { Rocket } from '../model/Rocket';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit, OnDestroy {

  flight_number:Number; 


  constructor(private ar : ActivatedRoute, private httpClient : HttpClient, private router:Router, private launchService : LaunchServiceService,
    private weatherService : WeatherService) { }
  
  
  launch:Launch = null;
  
  
  subLaunch : Subscription;
  
  ngOnInit(): void {
    this.ar.params.subscribe(
      params=>{
        this.flight_number = params['flight_number'];
      }
    );

    this.subLaunch = this.launchService.getLaunchById(this.flight_number).subscribe(
      rez=>{
        this.launch = rez;
        // this.launchService.getLaunchpadForFlight(this.launch['site_id']).subscribe(
        //   site => {
        //     let lat = site['location']['latitude'];
        //     let lng = site['location']['longitude'];
        //     // https://openweathermap.org/current
        //     this.weatherService.getWeatherForLocation(lat, lng).subscribe(
        //       weather => {
        //         console.log('weather at launch coordinates: ', weather);
        //       },
        //       err => {
        //         console.log('error: ', err);
        //       }
        //     );
        //   },
        //   err => {
        //     console.log(err);
        //   }
        // );
      }
    );
  }

  viewFirstStage(){
    
  }

test(){

 
}

  ngOnDestroy(): void {
   this.subLaunch.unsubscribe();
  }
}
