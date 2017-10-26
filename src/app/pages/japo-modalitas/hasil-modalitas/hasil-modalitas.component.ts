import { Component } from '@angular/core';

@Component({
  selector: 'ngx-hasilmodalitas',
  styleUrls: ['./hasil-modalitas.component.scss'],
  templateUrl: './hasil-modalitas.component.html',
})


export class HasilModalitasComponent {
  namaKlien: string;
  apakahVisual_1: boolean;
  apakahVisual_2: boolean;
  apakahAuditori_1: boolean;
  apakahAuditori_2: boolean;
  apakahKinestetik_1: boolean;
  apakahKinestetik_2: boolean;

  constructor() {
    this.namaKlien = 'Ariani';
    this.apakahVisual_1 = false;
    this.apakahVisual_2 = false;
    this.apakahAuditori_1 = true;
    this.apakahAuditori_2 = true;
    this.apakahKinestetik_1 = false;
    this.apakahKinestetik_2 = false;
  }
}
