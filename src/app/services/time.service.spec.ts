import { TestBed, fakeAsync, inject } from '@angular/core/testing';

import { TimeService } from './time.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TimeModel } from './../models/time.model';

describe('TimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
  }));

  it('should be created', () => {
    const service: TimeService = TestBed.get(TimeService);
    expect(service).toBeTruthy();
  });

  describe('Bloco de teste do método getTime', () => {
    it('getTime com sucesso', fakeAsync(inject([TimeService, HttpTestingController],
      (timeService: TimeService, api: HttpTestingController) => {
        const time = new TimeModel();
        time.Id = 1;
        time.Time = 'Brasil';
        const timeLista: TimeModel[] = [];
        timeLista.push(time);
        timeService.getTime().subscribe((response) => {
          expect(response[0].Id).toBe(1);
          expect(response[0].Time).toBe('Brasil');
        });
  
        api.expectOne('http://www.mocky.io/v2/5d76cb5c3200000462297cd3').flush(timeLista);
    })));
  
    it('getTime com erro', fakeAsync(inject([TimeService, HttpTestingController],
      (timeService: TimeService, api: HttpTestingController) => {
        timeService.getTime().subscribe({
          error: (err) => {
            expect(err).toBeDefined();
          }
        });
  
        api.expectOne('http://www.mocky.io/v2/5d76cb5c3200000462297cd3').error(new ErrorEvent('Error'));
    })));
  });
});
