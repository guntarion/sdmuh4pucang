import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SamGurubkComponent} from './sam-gurubk/sam-gurubk.component';
import {SamKepsekComponent} from './sam-kepsek/sam-kepsek.component';
import {SamPsikologComponent} from './sam-psikolog/sam-psikolog.component';
import {SambutanComponent} from './sambutan.component';

const routes: Routes = [{
  path: '',
  component: SambutanComponent,
  children: [{
    path: 'sam-kepsek',
    component: SamKepsekComponent,
  }, {
    path: 'sam-gurubk',
    component: SamGurubkComponent,
  }, {
    path: 'sam-psikolog',
    component: SamPsikologComponent,
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
export class SambutanRoutingModule {

}

export const routedComponents = [
  SambutanComponent,
  SamGurubkComponent,
  SamKepsekComponent,
  SamPsikologComponent,
];
