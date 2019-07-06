import { Component, OnInit, OnChanges, Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Params } from '@angular/router';
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
    userSubscription: Subscription;

    constructor(private route: ActivatedRoute, private apitalkservice: ApitalkService ,
                private router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

    ngOnInit() {
      this.spinnerService.show();
      this.userSubscription = this.route.params.subscribe(
            (params: Params) => {
                this.apitalkservice.getWeatherByCity(params.city).subscribe(res => this.weatherbycity = res.data);
                this.spinnerService.hide();
        });
    }

}
