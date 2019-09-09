export class TimeModel {
    private id: number;
    private time: string;
  
    public get Id(): number {
      return this.id;
    }
  
    public set Id(value: number) {
      this.id = value;
    }
  
    public get Time(): string {
      return this.time;
    }
  
    public set Time(value: string) {
      this.time = value;
    }
  }
  