import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstStage } from '../model/firststage';
import { Launch } from '../model/launch';
import { Rocket } from '../model/Rocket';

@Component({
  selector: 'app-firststage',
  templateUrl: './firststage.component.html',
  styleUrls: ['./firststage.component.css']
})
export class FirststageComponent implements OnInit {

  constructor(private ar : ActivatedRoute, private httpClient : HttpClient) { }
  
  flight_number:Number;
  
  launch:Launch;
  
 
  
  ngOnInit(): void {
    this.ar.params.subscribe(
      params=>this.flight_number = params['flight_number']
    );
    this.httpClient.get<Launch>(`https://api.spacexdata.com/v3/launches/${this.flight_number}`).subscribe(
      rez=>{
        this.launch = rez;
      }
    );
  }

}
