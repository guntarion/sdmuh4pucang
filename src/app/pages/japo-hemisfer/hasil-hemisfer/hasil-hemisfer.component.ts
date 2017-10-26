import {Component, OnInit} from '@angular/core';
import {JapoHemisferService} from '../../../@core/data/japo-hemisfer.service';

@Component({
  selector: 'ngx-hasilhe',
  styleUrls: ['./hasil-hemisfer.component.scss'],
  templateUrl: './hasil-hemisfer.component.html',
})
export class HasilHemisferComponent implements OnInit {
  title: string = ' tes judulnya ';
  namaKlien: string = 'Ariani';

  apaHemisferKanan: boolean;

  hemisferYbs: string;
  kontenHemisfer: string;
  deskripsiHemisfernya: string;

  kontenHemKiri_1 = 'Sudah barang tentu {{ namaKlien }} akan masih menggunakan hemisfer kanan Anda; hanya saja Anda memiliki ' +
    'kecenderungan untuk menggunakan hemisfer kiri Anda lebih sering daripada hemisfer kanan.  Anda memiliki bakat ' +
    'keterampilan sebagai berikut: menggunakan logika dalam pengambilan keputusan, mendasarkan pada  realita ' +
    'dan fakta, berorientasi pada detail, menguasai kata dan bahasa, peka terhadap aturan. Kata kerja terkait: ' +
    'mengingat nama benda, membaca pola, membangun keteraturan.';
  kontenHemKanan_1 = 'Sudah barang tentu Anda akan masih menggunakan hemisfer kiri Anda; hanya saja Anda memiliki ' +
    'kecenderungan untuk menggunakan hemisfer kanan Anda lebih sering daripada hemisfer kiri.  Anda memiliki bakat' +
    ' keterampilan sebagai berikut: menggunakan perasaan dalam mengambil keputusan, berorientasi pada &quot;gambaran ' +
    'besar&quot; dan maksud inti (meskipun mungkin lupa akan detail), mengingat fungsi dari sesuatu (meski lupa' +
    ' namanya), pandai berimajinasi dan berfantasi, dan cenderung suka mengambil risiko, lebih menyukai simbol' +
    ' dan gambar.';

  desk_hem_kanan_1 = 'Hemisfer kanan memiliki bakat dalam menangkap dan memahami ekspresi perasaaan orang lain baik yang berwujud kata-kata ataupun ekspresi wajah. Orang hemisfer kanan melihat sesuatu dalam gambaran besarnya alih-alih sisi detailnya. Orang hemisfer kanan memiliki kelebihan dalam mengenali bentuk, menggambar, dan apapun kerja yang melibatkan bentuk dan pola termasuk gambar geometris. Ini termasuk kepekaan terhadap spektrum warna dan tingkat kecerahan benda serta kemampuan untuk memvisualisasi sesuatu yang kaya warna.';
  desk_hem_kanan_2 = '';
  desk_hem_kanan_3 = '';

  desk_hem_kiri_1 = '';
  desk_hem_kiri_2 = '';
  desk_hem_kiri_3 = '';


  constructor() {
    this.apaHemisferKanan = false;
    this.kontenHemisfer = this.kontenHemKiri_1;
  }

  ngOnInit(): void {
  }

}
