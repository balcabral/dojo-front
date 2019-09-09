import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { TimeModel } from './../models/time.model';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }

  public getTime(): Observable<TimeModel[]> {
    const url = 'http://www.mocky.io/v2/5d76cb5c3200000462297cd3';
    return this.http.get<TimeModel[]>(url)
        .pipe(catchError(erro => of(erro)));
  }
}
