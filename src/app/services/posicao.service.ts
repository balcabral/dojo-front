import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PosicaoModel } from './../models/posicao.model';

@Injectable({
  providedIn: 'root'
})
export class PosicaoService {

  constructor(private http: HttpClient) { }

  public getPosicao(): Observable<PosicaoModel[]> {
    const url = 'http://www.mocky.io/v2/5d76d046320000f565297ce1';
    return this.http.get<PosicaoModel[]>(url)
        .pipe(catchError(erro => of(erro)));
  }
}
