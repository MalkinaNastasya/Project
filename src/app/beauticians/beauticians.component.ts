import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { Beautician } from '../shared/modals/beautician.modal';

@Component({
  selector: 'app-beauticians',
  templateUrl: './beauticians.component.html',
  styleUrls: ['./beauticians.component.css']
})
export class BeauticiansComponent implements OnInit {

  @Input() beautician
  beauticians: Beautician[] = [];
  constructor(private api: MainService) { }
  
  async ngOnInit() {
    let beauticianssarr = await this.getBeautician();
    if (Array.isArray(beauticianssarr)) {
      beauticianssarr.forEach((element) => {
        let el: Beautician = {  
          id: element.id,
          name: element.name,
          role: element.role,
          services: element.services,
        };
        this.beauticians.push(el);       
      });
    }
  }

    async getBeautician() { 
      let response;
       try {
         response = await this.api.get("/beauticians");
         console.log("RESPONSE");
         console.log(response);
       } catch (error) {
         console.log(error);
       }
       return response;
     }


}
