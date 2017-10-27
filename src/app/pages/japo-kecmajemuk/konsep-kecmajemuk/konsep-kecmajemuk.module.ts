import { NgModule } from '@angular/core';

import {AccordionModule, MenuItem} from 'primeng/primeng';
import { ThemeModule } from '../../../@theme/theme.module';
import {ModalComponent} from './modal.component';



@NgModule({
  imports: [
    ThemeModule


  ],
  declarations: [
  ],
  entryComponents: [ModalComponent]
})
export class KonsepKecmajemukModule {}
