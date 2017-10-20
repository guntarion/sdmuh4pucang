import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {KonsepModalitasComponent} from './konsep-modalitas/konsep-modalitas.component';
import {HasilModalitasComponent} from './hasil-modalitas/hasil-modalitas.component';
import {JapoModalitasComponent} from './japo-modalitas.component';

const routes: Routes = [{
  path: '',
  component: JapoModalitasComponent,
  children: [{
    path: 'konsepmodalitas',
    component: KonsepModalitasComponent,
  }, {
    path: 'hasilmodalitas',
    component: HasilModalitasComponent,
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
export class JapoModalitasRoutingModule {

}

export const routedComponents = [
  JapoModalitasComponent,
  HasilModalitasComponent,
  KonsepModalitasComponent,
];
