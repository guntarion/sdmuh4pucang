import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { ThemeModule } from '../../@theme/theme.module';
import { JapoModalitasRoutingModule, routedComponents} from './japo-modalitas-routing.module';
import {ChartjsRadarModalitasComponent} from './hasil-modalitas/chartjs-radar-modalitas.component';
import {ChartjsPieModalitasComponent} from './hasil-modalitas/chartjs-pie-modalitas.component';

const components = [
  ChartjsRadarModalitasComponent,
  ChartjsPieModalitasComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    JapoModalitasRoutingModule,
    AngularEchartsModule, NgxChartsModule, ChartModule
  ],
  declarations: [
    ...routedComponents, ...components
  ],
})
export class JapoModalitasModule { }
