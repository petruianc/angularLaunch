import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LaunchServiceService } from '../launch-service.service';
import { Launch } from '../model/launch';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit, OnDestroy {

  constructor(private ar : ActivatedRoute, private httpClient : HttpClient, private launchService : LaunchServiceService) { }
  
  
  launch:Launch;
  flight_number:Number;
  myimage_mission_patch:string;
  myvideo_video_link:string;

  subLaunch : Subscription;
  
  ngOnInit(): void {
    this.ar.params.subscribe(
      params=>this.flight_number = params['flight_number']
    );
    
    this.subLaunch = this.launchService.getLaunchById(this.flight_number).subscribe(
      rez=>{
        this.launch = rez;
        this.myimage_mission_patch = rez.links.mission_patch_small;
        this.myvideo_video_link = rez.links.video_link.split("=")[1];
        console.log(this.myvideo_video_link);
      }
    );
  }

  ngOnDestroy(): void {
    this.subLaunch.unsubscribe();
  }

}
