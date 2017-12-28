import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainAreaModule } from './main-area/main-area.module';
import { DashboardAreaModule } from './dashboard-area/dashboard-area.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainAreaModule,
    DashboardAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
