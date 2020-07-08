import { Component, OnInit } from '@angular/core';
import { Record } from '../shared/modals/record.modal';
import { MainService } from '../shared/services/main.service';

@Component({
  selector: 'app-record-admin',
  templateUrl: './record-admin.component.html',
  styleUrls: ['./record-admin.component.css']
})
export class RecordAdminComponent implements OnInit {
  filter_status='0';
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
        //  if ((this.filter_status != " ") || (this.filter_status == result[one].status)){
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
        // }
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
