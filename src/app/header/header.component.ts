import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
    public items: Array<string> = ['İstanbul', 'Ankara', 'İzmir', 'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya',
    'Antalya', 'Ardahan', 'Artvin', 'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur',
    'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
    'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Iğdır', 'Isparta', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu',
    'Kayseri', 'Kırıkkale', 'Kırklareli', 'Kırşehir', 'Kilis', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Mardin', 'Mersin',
    'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Şırnak', 'Tekirdağ',
    'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'];
    private value = {};
    private disabled = false;
    weatherbycity: Observable<any>;
// tslint:disable-next-line: variable-name

    constructor(private router: Router , private r: ActivatedRoute) { }

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
