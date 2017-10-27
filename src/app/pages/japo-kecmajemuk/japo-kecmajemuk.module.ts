import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';


import { ThemeModule } from '../../@theme/theme.module';
import { JapoKecmajemukRoutingModule, routedComponents} from './japo-kecmajemuk-routing.module';
import {ChartjsBarHorizontalKecLatenComponent} from './hasil-kecmajemuk/chartjs-bar-horizontal-keclaten.component';
import {ModalComponent} from './konsep-kecmajemuk/modal.component';


const components = [
  ChartjsBarHorizontalKecLatenComponent,
  ModalComponent
];


@NgModule({
  imports: [
    ThemeModule,
    JapoKecmajemukRoutingModule,
    AngularEchartsModule, NgxChartsModule, ChartModule,
  ],
  declarations: [
    ...routedComponents, ...components
  ],
  entryComponents: [ModalComponent]
})
export class JapoKecmajemukModule {}
