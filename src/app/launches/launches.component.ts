import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaunchServiceService } from '../launch-service.service';
import { Launch } from '../model/launch';


@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  constructor(private launchService:LaunchServiceService, private router: Router) { }
  
  public launches : Launch[] = null;
  
  ngOnInit(): void {
    this.launchService.getLaunches().subscribe(
      rez=>
      {
        this.launches = rez
      },
      err=>
      {
        console.log(err);
      });
  }

}
