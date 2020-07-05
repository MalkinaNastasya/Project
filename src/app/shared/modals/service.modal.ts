export class Service {
  public id: number;
  public name: string;
  public time: string;
  public cost: string;
  public description: string;
  constructor(id:number, name:string, time:string, cost:string, description: string){
      this.id = id;
      this.name = name;
      this.time = time;
      this.cost = cost;
      this.description = description;
  }
}