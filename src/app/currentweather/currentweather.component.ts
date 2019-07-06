import { Component, OnInit, AfterViewInit, OnDestroy, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApitalkService } from 'src/services/apitalk.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

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
    template =
    `<img class="custom-spinner-template" src="assets/sun-loading.gif">`;
// tslint:disable-next-line: variable-name

constructor(private apitalk: ApitalkService, private spinnerService: Ng4LoadingSpinnerService) {}
  ngOnInit() {
    this.spinnerService.show();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.subscriptions.add(this.apitalk.getWeatherByGeo(this.latitude, this.longitude).subscribe(res => this.weather = res.data));
            this.spinnerService.hide();
        });
    }
  }
  ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
