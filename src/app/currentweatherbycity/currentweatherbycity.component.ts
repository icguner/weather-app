import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApitalkService } from '../../services/apitalk.service';
import { Observable, Subscription } from 'rxjs';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable({
    providedIn: 'root',
  })

@Component({
    selector: 'app-currentweatherbycity',
    templateUrl: './currentweatherbycity.component.html',
    styleUrls: ['./currentweatherbycity.component.sass']
})
export class CurrentweatherbycityComponent implements OnInit  {
    private cityparam: string;
    public weatherbycity: Observable<any>;
    public isLoading: boolean;
    userSubscription: Subscription;
    template =
    `<img class="custom-spinner-template" src="assets/sun-loading.gif">`;

    constructor(private route: ActivatedRoute, private apitalkservice: ApitalkService ,
                private router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

    ngOnInit() {
      this.spinnerService.show();
      this.isLoading = true;
      this.userSubscription = this.route.params.subscribe(
            (params: Params) => {
                this.apitalkservice.getWeatherByCity(params.city).subscribe(res => this.weatherbycity = res);
                this.spinnerService.hide();
                this.isLoading = false;
        });
    }

}
