import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { Service } from '../shared/modals/service.modal';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  @Input() service
  @Output() del = new EventEmitter<number>();
  services: Service[] = [];
  mainService: any;
  constructor(private api: MainService) { }
  
  async ngOnInit() {
    let servicesarr = await this.getServices();
    if (Array.isArray(servicesarr)) {
      servicesarr.forEach((element) => {
        let el: Service = {  
          id: element.id,
          name: element.name,
          time: element.time,
          cost: element.cost,
        };
        this.services.push(el);       
      });
    }
  }
// Функция получения услуги из БД
    async getServices() { 
      let response;
       try {
         response = await this.api.get("/services");
         console.log("RESPONSE");
         console.log(response);
       } catch (error) {
         console.log(error);
       }
       return response;
     }

// Функция удаления услуги из БД 
async onDelete(id){
  try {
    let result = await this.api.delete(`/delete/${id}`);
  } catch (error) {
    console.log(error);   
  }
  this.del.emit(id);
}

}
