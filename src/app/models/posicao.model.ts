export class PosicaoModel {
    private id: number;
    private posicao: string;
  
    public get Id(): number {
      return this.id;
    }
  
    public set Id(value: number) {
      this.id = value;
    }
  
    public get Posicao(): string {
      return this.posicao;
    }
  
    public set Posicao(value: string) {
      this.posicao = value;
    }
  }
  