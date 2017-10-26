import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class JapoHasilAnalisisService {
  private _hemisfernya = 'kanan';
  private _modalitasnya = 'auditori';


  getHemisfernya(): string {
    return this._hemisfernya;
  }
  getModalitasnya() {
    return this._modalitasnya;
  }
}
