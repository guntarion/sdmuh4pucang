import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { ChartjsPieComponent } from './hasil-hemisfer/chartjs-pie.component';

import { ThemeModule } from '../../@theme/theme.module';
import {JapoHemisferRoutingModule, routedComponents} from './japo-hemisfer-routing.module';

const components = [
  ChartjsPieComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    JapoHemisferRoutingModule,
    AngularEchartsModule, NgxChartsModule, ChartModule],
  declarations: [
    ...routedComponents, ...components],
})
export class JapoHemisferModule { }
