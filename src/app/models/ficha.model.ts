import { TimeModel } from './time.model';
import { PosicaoModel } from './posicao.model';

export class FichaModel {
    private nome: string;
    private ano: string;
    private altura: string;
    private peso: string;
    private posicao1: PosicaoModel;
    private posicao2: PosicaoModel;
    private time1: TimeModel;
    private time2: TimeModel;
  
    public get Nome(): string {
      return this.nome;
    }
  
    public set Nome(value: string) {
      this.nome = value;
    }

    public get Ano(): string {
        return this.ano;
    }

    public set Ano(value: string) {
        this.ano = value;
    }

    public get Altura(): string {
        return this.altura;
    }

    public set Altura(value: string) {
        this.altura = value;
    }

    public get Peso(): string {
        return this.peso;
    }

    public set Peso(value: string) {
        this.peso = value;
    }

    public get Posicao1(): PosicaoModel {
        return this.posicao1;
    }

    public set Posicao1(value: PosicaoModel) {
        this.posicao1 = value;
    }

    public get Posicao2(): PosicaoModel {
        return this.posicao2;
    }

    public set Posicao2(value: PosicaoModel) {
        this.posicao2 = value;
    }

    public get Time1(): TimeModel {
        return this.time1;
    }

    public set Time1(value: TimeModel) {
        this.time1 = value;
    }

    public get Time2(): TimeModel {
        return this.time2;
    }

    public set Time2(value: TimeModel) {
        this.time2 = value;
    }
  }
  