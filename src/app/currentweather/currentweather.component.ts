import { Component, OnInit, AfterViewInit, OnDestroy, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApitalkService } from 'src/services/apitalk.service';

@Injectable({
    providedIn: 'root',
  })

@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.sass']
})
export class CurrentweatherComponent implements OnInit,  OnDestroy {
    private subscriptions = new Subscription();
    public latitude: number;
    public longitude: number;
    weather: Observable<any>;
// tslint:disable-next-line: variable-name

constructor(private apitalk: ApitalkService) {}
  ngOnInit() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.subscriptions.add(this.apitalk.getWeatherByGeo(this.latitude, this.longitude).subscribe(res => this.weather = res.data));
        });
    }
  }
  ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
