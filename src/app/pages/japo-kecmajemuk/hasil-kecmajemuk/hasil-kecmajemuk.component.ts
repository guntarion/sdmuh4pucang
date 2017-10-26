import { Component } from '@angular/core';

@Component({
  selector: 'ngx-hasilkecmajemuk',
  styleUrls: ['./hasil-kecmajemuk.component.scss'],
  templateUrl: './hasil-kecmajemuk.component.html',
})
export class HasilKecmajemukComponent {
  namaKlien: string;
  apaBerbakatVisual_1: boolean;
  apaBerbakatVisual_2: boolean;

  constructor() {
    this.namaKlien = 'Ariani';
    this.apaBerbakatVisual_1 = true;
    this.apaBerbakatVisual_2 = true;
  }
}
