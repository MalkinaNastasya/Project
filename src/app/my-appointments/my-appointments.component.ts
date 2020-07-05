import { Component, OnInit, Input } from '@angular/core';
import { Beautician } from '../shared/modals/beautician.modal';
import { MainService } from '../shared/services/main.service';
import { New } from '../shared/modals/new.modal';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent implements OnInit {

  @Input() beautician
  beauticians: New[] = [];
  constructor(private api: MainService) { }
  
  async ngOnInit() {
    let beauticianssarr = await this.getBeautician();
    if (Array.isArray(beauticianssarr)) {
      beauticianssarr.forEach((element) => {
        let el = {  
          id: element.id,
          serv: element.serv,
          date: element.date,
          cosm: element.cosm,
        };
        this.beauticians.push(el);       
      });
    }
  }

    async getBeautician() { 
      let response;
       try {
         response = await this.api.get("/new");
         console.log("RESPONSE");
         console.log(response);
       } catch (error) {
         console.log(error);
       }
       return response;
     }


}
