import { Component } from '@angular/core';

@Component({
  selector: 'ngx-hasilhe',
  styleUrls: ['./hasil-hemisfer.component.scss'],
  templateUrl: './hasil-hemisfer.component.html',
})
export class HasilHemisferComponent {
  kontenHemKiri_1 = 'Sudah barang tentu Anda akan masih menggunakan hemisfer kanan Anda; hanya saja Anda memiliki ' +
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
  kontenHemisfer: string;


  constructor() {
    this.kontenHemisfer = this.kontenHemKiri_1;
  }
}
