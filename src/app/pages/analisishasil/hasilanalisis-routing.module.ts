import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import {HasilAnalisisComponent} from './hasilanalisis.component';

const routes: Routes = [{
  path: '',
  component: HasilAnalisisComponent,
  children: [{
    path: 'hemisfer',
    component: FormInputsComponent,
  }, {
    path: 'followup',
    component: FormLayoutsComponent,
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
export class HasilAnalisisRoutingModule {

}

export const routedComponents = [
  HasilAnalisisComponent,
  FormInputsComponent,
  FormLayoutsComponent,
];
