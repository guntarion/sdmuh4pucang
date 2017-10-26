import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class JapoHemisferService {
  private _catatanHemisferKiri = 'catatan hemisfer kiri dari SERVICE';
  private _catatanHemisferKanan = '';


  getHemisferDrYbs(): string {
    return this._catatanHemisferKanan;
  }

  getCatatanHemisfer() {
    return this._catatanHemisferKiri;
  }
}
