import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { BaseChartDirective } from 'ng2-charts';
import { AnalyticsComponent } from './analytics/analytics.component';
import Chart from 'chart.js/auto';



@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseChartDirective
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
