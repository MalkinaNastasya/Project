import { Component, OnInit, Input } from '@angular/core';
import { Beautician } from '../shared/modals/beautician.modal';
import { MainService } from '../shared/services/main.service';
import { New } from '../shared/modals/new.modal';
import { Record } from '../shared/modals/record.modal';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent implements OnInit {

  filter_status="0";
  records: Record[] = [];
  loading = false;
  notfound = true;

  constructor(private mainService: MainService) { }

  async ngOnInit() {
    // Получение списка всех записей,  имеющихся в БД
   this.loading = true;
   try {
     let result = await this.mainService.get("/records");
     if (Object.keys(result).length == 0) {
       console.log("пусто");
       result = undefined;
     }
     if (typeof result !== "undefined") {
       this.notfound = false;
       console.log(result);
       for (const one in result) {
         if (result[one].id == localStorage.getItem("id")){
         this.records.push(
           new Record(
             result[one].id_record,
             result[one].beautican,
             result[one].service,
             result[one].id,
             result[one].data,
             result[one].time,
             result[one].cost,
             result[one].status
           )
         );
         console.log(result[one].beautican);
        }
       }       
     } else {
       this.notfound = true;
     }
   } catch (error) {
     console.log(error);
   }
   this.loading = false;
  }

}
