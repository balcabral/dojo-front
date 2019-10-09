import { Component } from '@angular/core';
import { TimeService } from './services/time.service';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { TimeModel } from './models/time.model';
import { PosicaoService } from './services/posicao.service';
import { PosicaoModel } from './models/posicao.model';
import { FichaModel } from './models/ficha.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dojo-front';
  public loading = true;
  public nome: string;
  public ano: string;
  public altura: string;
  public peso: string;
  public posicao1: string;
  public posicao2: string;
  public time1: string;
  public time2: string;
  public showSummary = false;
  public getTimes: TimeModel[] = [];
  public getPosicoes: PosicaoModel[] = [];
  public ficha = new FichaModel();
  public fichaLista: FichaModel[] = [];

  constructor(
    private timeService: TimeService,
    private posicaoService: PosicaoService) { }

  ngOnInit() {
    this.getForkJoin();
  }

  public cadastrar() {
    if (this.validaDados()) {
      this.fichaLista.push(this.ficha);
      this.ficha = new FichaModel();
      this.showSummary = true;
    }
  }

  public getForkJoin() {
    const getTime = this.timeService.getTime();
    const getPosicao = this.posicaoService.getPosicao();

    forkJoin([getTime, getPosicao])
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(res => {
        this.getTimes = res[0];
        this.getPosicoes = res[1];
      });
  }

  private validaDados(): boolean {
    return this.ficha.Nome !== undefined && 
          (this.ficha.Posicao1 !== undefined || this.ficha.Posicao2 !== undefined) && 
          (this.ficha.Time1 !== undefined || this.ficha.Time2 !== undefined);
  }
}
