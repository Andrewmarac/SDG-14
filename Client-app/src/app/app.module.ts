import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sdg14Component } from './sdg14/sdg14.component';
import { TgchartsComponent } from './tgcharts/tgcharts.component';

@NgModule({
  declarations: [
    AppComponent,
    Sdg14Component,
    TgchartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
