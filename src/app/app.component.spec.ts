import { TestBed, ComponentFixture, fakeAsync, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PosicaoModel } from './models/posicao.model';
import { TimeModel } from './models/time.model';
import { TimeService } from './services/time.service';
import { PosicaoService } from './services/posicao.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dojo-front'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('dojo-front');
  });

  it(`validaDados deve retornar true`, () => {
    const posicao = new PosicaoModel();
    posicao.Id = 1;
    posicao.Posicao = 'Goleiro';

    const time = new TimeModel();
    time.Id = 1;
    time.Time = 'Brasil';
  
    component.ficha.Nome = 'Rafael';
    component.ficha.Posicao1 = posicao;
    component.ficha.Time1 = time;
    component.cadastrar();
    expect(fixture.componentInstance.showSummary).toBeTruthy();
  });

  it(`validaDados deve retornar false`, () => {
    component.cadastrar();
    expect(fixture.componentInstance.showSummary).toBeFalsy();
  });

  it('getForkJoin deve retornan time e posição com sucesso', fakeAsync(inject([TimeService, PosicaoService],
    (timeService: TimeService, posicaoService: PosicaoService) => {
    const time = new TimeModel();
    time.Id = 1;
    time.Time = 'Brasil';

    const posicao = new PosicaoModel();
    posicao.Id = 1;
    posicao.Posicao = 'Atacante';

    const timeResponse: TimeModel[] = [];
    const posicaoResponse: PosicaoModel[] = [];

    timeResponse.push(time);
    posicaoResponse.push(posicao);

    spyOn(timeService, 'getTime').and.returnValue(of(timeResponse));
    spyOn(posicaoService, 'getPosicao').and.returnValue(of(posicaoResponse));
    
    component.getForkJoin();

    expect(component.getTimes[0].Id).toEqual(timeResponse[0].Id);
    expect(component.getTimes[0].Time).toEqual(timeResponse[0].Time);
    expect(component.getPosicoes[0].Id).toEqual(posicaoResponse[0].Id);
    expect(component.getPosicoes[0].Posicao).toEqual(posicaoResponse[0].Posicao);
  })));
});
