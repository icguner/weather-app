import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CitiesService } from '../../services/cities.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass'],
    providers: [
    CitiesService
    ]
})
export class HeaderComponent {
    public cities: Array<string> = this.citiesService.CITIES;
    private value = {};
    private disabled = false;
    weatherbycity: Observable<any>;
// tslint:disable-next-line: variable-name

    constructor(private router: Router , private r: ActivatedRoute,
                private citiesService: CitiesService) { }

    public selected(value: any): void {
        this.router.navigate( ['/daily/', value.text]);
        // tslint:disable-next-line: prefer-const
    }

    public testConsole() {
        console.log(this.r.outlet);
    }

    public refreshValue(value: any): void {
        this.value = value;
    }

}
