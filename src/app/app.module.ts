import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentweatherbycityComponent } from './currentweatherbycity/currentweatherbycity.component';
import { CurrentweatherComponent } from './currentweather/currentweather.component';
import { SelectModule } from 'ng2-select';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    CurrentweatherbycityComponent,
    CurrentweatherComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
