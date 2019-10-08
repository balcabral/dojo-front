import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PosicaoModel } from './models/posicao.model';
import { TimeModel } from './models/time.model';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
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
  }));

  beforeEach(() => {
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
});
