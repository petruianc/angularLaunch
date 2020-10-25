import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private apiKey: string = 'secret';

  constructor(private httpClient: HttpClient) { }

  getWeatherForLocation(lat, lng, datetime = null) {
    return this.httpClient.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid={apiKey}`);
  }
}
