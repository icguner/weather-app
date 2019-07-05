import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentweatherComponent } from '../app/currentweather/currentweather.component';
import { CurrentweatherbycityComponent } from '../app/currentweatherbycity/currentweatherbycity.component';

const routes: Routes = [
    { path: '' , component: CurrentweatherComponent , pathMatch: 'full'},
    { path: 'daily' , component: CurrentweatherComponent , pathMatch: 'full'},
    { path: 'daily/:city', component: CurrentweatherbycityComponent , pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
