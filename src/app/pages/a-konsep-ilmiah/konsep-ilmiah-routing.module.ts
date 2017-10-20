import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KonsepIlmiahComponent} from './konsep-ilmiah.component';

const routes: Routes = [{
  path: '',
  component: KonsepIlmiahComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class KonsepIlmiahRoutingModule {

}

export const routedComponents = [
  KonsepIlmiahComponent,
];
