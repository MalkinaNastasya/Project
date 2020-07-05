export class Beautician {
  public id: number;
  public name: string;
  public sername: string;
  public role: string;
  public info: string;
  public services: string;
  constructor(id:number, name:string, sername:string, role:string, info: string, services: string){
      this.id = id;
      this.name = name;
      this.sername = sername;
      this.role = role;
      this.info = info;
      this.services = services;
  }
}