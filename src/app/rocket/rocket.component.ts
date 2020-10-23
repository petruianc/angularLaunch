import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LaunchServiceService } from '../launch-service.service';
import { Launch } from '../model/launch';
import { Rocket } from '../model/Rocket';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  flight_number:Number; 


  constructor(private ar : ActivatedRoute, private httpClient : HttpClient, private router:Router) { }
  
  launch:Launch = null;
  
  
  
  
  ngOnInit(): void {
    this.ar.params.subscribe(
      params=>{
        this.flight_number = params['flight_number'];
      }
    );

    this.httpClient.get<Launch>(`https://api.spacexdata.com/v3/launches/${this.flight_number}`).subscribe(
      rez=>{
        this.launch = rez;
      }
    );
  }

  viewFirstStage(){
    
  }

}
