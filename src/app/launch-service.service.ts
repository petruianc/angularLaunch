import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Launch } from './model/launch';

@Injectable({
  providedIn: 'root'
})
export class LaunchServiceService {

  constructor(private httpClient:HttpClient) { }

  private readonly _url:string = 'https://api.spacexdata.com/v3';

  getLaunches(): Observable<Launch[]>{
    return this.httpClient.get<Launch[]>(this._url + '/launches');
  }

  getLaunchById(flightNumber : Number) : Observable<Launch>{
    return this.httpClient.get<Launch>(`${this._url}/launches/${flightNumber}`)
  }

  getLaunchpadForFlight(siteId){
    return this.httpClient.get<any>(`${this._url}/launchpads/${siteId}`);
  }
}
