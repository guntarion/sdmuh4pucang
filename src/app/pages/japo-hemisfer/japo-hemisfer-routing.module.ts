import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {KonsepHemisferComponent} from './konsep-hemisfer/konsep-hemisfer.component';
import {HasilHemisferComponent} from './hasil-hemisfer/hasil-hemisfer.component';
import {JapoHemisferComponent} from './japo-hemisfer.component';

const routes: Routes = [{
  path: '',
  component: JapoHemisferComponent,
  children: [{
    path: 'konsephemisfer',
    component: KonsepHemisferComponent,
  }, {
    path: 'hasilhemisfer',
    component: HasilHemisferComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class JapoHemisferRoutingModule {

}

export const routedComponents = [
  JapoHemisferComponent,
  HasilHemisferComponent,
  KonsepHemisferComponent,
];
