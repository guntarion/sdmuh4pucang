import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {KonsepKecmajemukComponent} from './konsep-kecmajemuk/konsep-kecmajemuk.component';
import {HasilKecmajemukComponent} from './hasil-kecmajemuk/hasil-kecmajemuk.component';
import {JapoKecmajemukComponent} from './japo-kecmajemuk.component';

const routes: Routes = [{
  path: '',
  component: JapoKecmajemukComponent,
  children: [{
    path: 'konsepkecmajemuk',
    component: KonsepKecmajemukComponent,
  }, {
    path: 'hasilkecmajemuk',
    component: HasilKecmajemukComponent,
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
export class JapoKecmajemukRoutingModule {

}

export const routedComponents = [
  JapoKecmajemukComponent,
  HasilKecmajemukComponent,
  KonsepKecmajemukComponent,
];
