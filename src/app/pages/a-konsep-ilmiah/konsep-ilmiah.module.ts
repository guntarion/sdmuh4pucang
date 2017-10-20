import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { KonsepIlmiahRoutingModule, routedComponents} from './konsep-ilmiah-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    KonsepIlmiahRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class KonsepIlmiahModule { }
