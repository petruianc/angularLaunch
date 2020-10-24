import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LaunchServiceService } from '../launch-service.service';
import { FirstStage } from '../model/firststage';
import { Launch } from '../model/launch';
import { Rocket } from '../model/Rocket';

@Component({
  selector: 'app-firststage',
  templateUrl: './firststage.component.html',
  styleUrls: ['./firststage.component.css']
})
export class FirststageComponent implements OnInit, OnDestroy {

  constructor(private ar : ActivatedRoute, private httpClient : HttpClient, private launchService : LaunchServiceService) { }
  
  
  flight_number:Number;
  
  launch:Launch;
  subLaunch : Subscription;
 
  
  ngOnInit(): void {
    this.ar.params.subscribe(
      params=>this.flight_number = params['flight_number']
    );
    this.subLaunch = this.launchService.getLaunchById(this.flight_number).subscribe(
      rez=>{
        this.launch = rez;
      }
    );
  }

  ngOnDestroy(): void {
    this.subLaunch.unsubscribe();
  }
}
