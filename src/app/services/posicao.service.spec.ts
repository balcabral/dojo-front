import { TestBed, fakeAsync, inject } from '@angular/core/testing';
import { PosicaoService } from './posicao.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PosicaoModel } from './../models/posicao.model';

describe('PosicaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
  }));

  it('should be created', () => {
    const service: PosicaoService = TestBed.get(PosicaoService);
    expect(service).toBeTruthy();
  });

  describe('Bloco de teste do método getPosicao', () => {
    it('getPosicao com sucesso', fakeAsync(inject([PosicaoService, HttpTestingController],
    (posicaoService: PosicaoService, api: HttpTestingController) => {
      const posicao = new PosicaoModel();
      posicao.Id = 1;
      posicao.Posicao = 'Goleiro';
      const posicaoLista: PosicaoModel[] = [];
      posicaoLista.push(posicao);
      posicaoService.getPosicao().subscribe((response) => {
        expect(response[0].Id).toBe(1);
        expect(response[0].Posicao).toBe('Goleiro');
      });

      api.expectOne('http://www.mocky.io/v2/5d76d046320000f565297ce1').flush(posicaoLista);
  })));

  it('getPosicao com erro', fakeAsync(inject([PosicaoService, HttpTestingController],
    (posicaoService: PosicaoService, api: HttpTestingController) => {
      posicaoService.getPosicao().subscribe({
        error: (err) => {
          expect(err).toBeDefined();
        }
      });

      api.expectOne('http://www.mocky.io/v2/5d76d046320000f565297ce1').error(new ErrorEvent('Error'));
  })));
  });
});
