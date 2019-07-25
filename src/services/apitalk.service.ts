import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApitalkService {
    private apiUrl = 'https://api.apixu.com/v1/current.json?key=546d7edd574d41668dd81941192507&q=';
    private lang = 'tr';
    constructor(private http: HttpClient) {}
    getWeatherByGeo(lat, lon): Observable<any> {
        return this.http.get(this.apiUrl + lat + ',' + lon +  '&lang=' + this.lang);
    }
    getWeatherByCity(city: string): Observable<any> {
      return this.http.get(this.apiUrl + 'city=' + city + ',&lang=' + this.lang);
  }
}
