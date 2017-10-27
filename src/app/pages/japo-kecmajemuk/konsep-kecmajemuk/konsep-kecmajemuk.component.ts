import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'ngx-konsepkecmajemuk',
  styleUrls: ['./konsep-kecmajemuk.component.scss'],
  templateUrl: './konsep-kecmajemuk.component.html',
})
export class KonsepKecmajemukComponent {

  starRate: number = 2;
  heartRate: number = 4;

  constructor(private modalService: NgbModal) { }

  showLargeModal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Kecerdasan Spasial';
    activeModal.componentInstance.modalContent = ' Testing KecSpasial';
  }

  showKecBahasa() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Kecerdasan Linguistik';
    activeModal.componentInstance.modalContent = 'Kecerdasan linguistik adalah kemampuan untuk menggunakan kata – kata secara efektif, secara lisan maupun tulisan. Kecerdasan ini mencakup kepekaan terhadap arti kata, suara, ritme dan intonasi dari kata yang diucapkan. Termasuk kemampuan untuk mengerti kekuatan kata dalam mengubah kondisi pikiran dan menyampaikan informasi.';
  }
  showKecLogis() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Kecerdasan Logis';
    activeModal.componentInstance.modalContent = 'Kecerdasan ini memungkinkan manusia melakukan perhitungan, pengukuran, pemikiran induktif dan deduktif serta mengenali pola – pola abstrak. Kecerdasan ini tumbuh sejak usia dini yaitu sejak seseorang melakukan pengenalan bentuk dan pola kemudian berkembang dalam memahami pola–pola pemikiran yang logis.';
  }
  showKecGambar() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Kecerdasan Spasial';
    activeModal.componentInstance.modalContent = 'Kecerdasan visual spasial adalah kemampuan untuk melihat dan mengamati dunia visual dan spasial secara akurat (cermat). Visual artinya gambar sedangkan spasial yaitu hal-hal yang berkenaan dengan ruang atau tempat. Kecerdasan ini melibatkan kesadaran akan warna, garis, bentuk, ruang, ukuran dan juga hubungan diantara elemen – elemen tersebut. Kecerdasan ini melibatkan kemampuan untuk melihat objek dari berbagai sudut pandang.';
  }
  showKecMusikal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Kecerdasan Musikal';
    activeModal.componentInstance.modalContent = 'Kecerdasan musik adalah kemampuan untuk menikmati, mengamati, membedakan, mengarang, membentuk dan mengepresikan bentuk – bentuk musik yang meliputi kepekaan terhadap ritme, melodi dari musik yang di dengar.';
  }
  showKecGerak() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Kecerdasan Gerak';
    activeModal.componentInstance.modalContent = 'Kecerdasan kinestetik adalah kecerdasan yang berhubungan dengan anggota tubuh. Kecerdasan ini memungkinkan koordinasi antara otak dan tubuh manusia. Manfaat optimasi kecerdasan ini dirasakan seseorang tidak hanya dalam menunjang aktivitas sehari – hari namun juga dapat menghasilkan keterampilan tubuh yang luar biasa seperti yang dilakukan oleh para atlet, penari, akrobator, guru olahraga dan koreografer.';
  }
  showKecInterpersonal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Kecerdasan Interpersonal';
    activeModal.componentInstance.modalContent = 'Kecerdasan interpersonal adalah kecerdasan seseorang dalam menjalin hubungan atau relasi dengan orang lain. Kecerdasan ini merupakan kecerdasan emosional. Indikator dari kecerdasan ini umumnya adalah peka terhadap perasaan, mudah berinteraksi, mudah menjalin persahabatan, mampu memimpin atau mempengaruhi teman dan mudah berempati terhadap masalah yang dihadapi orang lain.';
  }
  showKecIntrapersonal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Kecerdasan Intrapersonal';
    activeModal.componentInstance.modalContent = 'Kecerdasan intrapersonal adalah kecerdasan yang berhubungan degan kesadaran dan pengetahuan tentang diri sendiri, yang melibatkan kemampuan untuk secara tepat dan nyata menciptakan gambaran diri sendiri yaitu hal – hal mengenai perasaan, pemikiran dan kecenderungan perilaku lainnya. Kecerdasan ini termasuk dalam kecerdasan emosional. Individu dengan kecerdasan ini memiliki rasa percaya diri yang besar serta senang bekerja berdasarkan program sendiri dan hanya melakukannya sendiri.';
  }
  showKecAbstrak() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Kecerdasan Abstrak';
    activeModal.componentInstance.modalContent = 'Kecerdasan Abstrak Lateral berpasangan dengan kecerdasan Logis Matematis, dalam arti terkait dengan kemampuan dalam memecahkan permasalahan dan pengambilan keputusan. Hanya saja orang dengan kecerdasan Imajinatif lebih melakukan pendekatan dengan gaya otak kanan, dengan cara berpikir luas dan menjangkau apa yang lebih dari apa yang tampak secara kasat mata.';
  }


}
