import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LaunchServiceService } from '../launch-service.service';
import { Launch } from '../model/launch';


@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit, OnDestroy {

  constructor(private launchService:LaunchServiceService, private router: Router) { }
 
  
  public launches : Launch[] = null;
  
  subLaunches : Subscription;
  displayedColumns: string[] = ['flightNumber', 'missionName', 'missionId', 'launchYear', 'launchDate', 'launchWindow', 'rocket', 'link'];

  ngOnInit(): void {
    this.subLaunches = this.launchService.getLaunches().subscribe(
      rez=>
      {
        this.launches = rez
      },
      err=>
      {
        console.log(err);
      });
  }
  ngOnDestroy(): void {
    this.subLaunches.unsubscribe();
  }
}
