import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApitalkService {
    private apiKey = 'a9cec370345e41ae9e8f42141a60d727';
    private apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/current?';
    private lang = 'tr';
    constructor(private http: HttpClient) {}
    getWeatherByGeo(lat, lon): Observable<any> {
        return this.http.get(this.apiUrl + 'lat=' + lat + '&lon=' + lon + '&key=' + this.apiKey + '&lang=' + this.lang);
    }
    getWeatherByCity(city: string): Observable<any> {
      return this.http.get(this.apiUrl + 'city=' + city + '&key=' + this.apiKey + '&lang=' + this.lang);
  }
}
