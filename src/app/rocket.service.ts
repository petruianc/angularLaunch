import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Launch } from './model/launch';
@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor(private httpClient:HttpClient) { }
  private _url:string = 'https://api.spacexdata.com/v3/launches/{{flight_number}}';
  
  getRocket() : Observable<Launch> {
    return this.httpClient.get<Launch>(this._url);
  }
}
