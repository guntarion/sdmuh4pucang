import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { JapoKecmajemukRoutingModule, routedComponents} from './japo-kecmajemuk-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    JapoKecmajemukRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class JapoKecmajemukModule {}
