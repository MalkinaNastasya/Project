export class Record {
    public id_record: number;
    public beautican: string;
    public service: string;
    public id: string;
    public data: string;
    public time: string;
    public cost: string;
    public status: string;
    constructor(id_record:number, beautican:string, service:string, id:string, data:string, time:string, cost:string, status:string){
        this.id_record=id_record;
        this.beautican=beautican;
        this.service=service;
        this.id=id;
        this.data=data;
        this.time=time;
        this.cost=cost;
        this.status=status;
    }
}