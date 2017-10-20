import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {BantuanRoutingModule, routedComponents} from './bantuan-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    BantuanRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class BantuanModule { }
