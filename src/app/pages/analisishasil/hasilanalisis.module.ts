import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { HasilAnalisisRoutingModule, routedComponents} from './hasilanalisis-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    HasilAnalisisRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class HasilAnalisisModule { }
