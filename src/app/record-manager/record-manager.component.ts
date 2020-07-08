import { Component, OnInit } from '@angular/core';
import { Record } from '../shared/modals/record.modal';
import { MainService } from '../shared/services/main.service';

@Component({
  selector: 'app-record-manager',
  templateUrl: './record-manager.component.html',
  styleUrls: ['./record-manager.component.css']
})
export class RecordManagerComponent implements OnInit {
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
         if (result[one].beautican == localStorage.getItem("name")+" "+localStorage.getItem("sername")){
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
