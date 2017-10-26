import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { routedComponents, SambutanRoutingModule} from './sambutan-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    SambutanRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class SambutanModule { }
