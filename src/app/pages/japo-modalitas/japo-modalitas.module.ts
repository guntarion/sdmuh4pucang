import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { JapoModalitasRoutingModule, routedComponents} from './japo-modalitas-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    JapoModalitasRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class JapoModalitasModule { }
