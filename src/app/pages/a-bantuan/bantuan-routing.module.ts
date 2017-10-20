import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BantuanComponent} from './bantuan.component';

const routes: Routes = [{
  path: '',
  component: BantuanComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class BantuanRoutingModule {

}

export const routedComponents = [
  BantuanComponent,
];
