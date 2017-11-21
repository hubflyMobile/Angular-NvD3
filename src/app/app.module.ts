import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NvD3Module } from 'ng2-nvd3';

import { AppComponent } from './app.component';
import { BarchartComponent } from './shared/barchart/barchart.component';
import { PieChartComponent } from './shared/pie-chart/pie-chart.component';


// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { DonutChartComponent } from './shared/donut-chart/donut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    PieChartComponent,
    LineChartComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule,NvD3Module 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
