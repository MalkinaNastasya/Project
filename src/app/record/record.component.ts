import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../shared/services/main.service';
import { Record } from '../shared/modals/record.modal';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
   // Логическая переменная определяющая наличие или отсуствие кнопки Удалить в карточке
   hide1 = true;
  hide2 = true;
  hide3 = true;
   demonstrateRecord = true;
 
   @Input() record;
   @Output() delete = new EventEmitter<number>();
 
   constructor(private router: Router, private mainService: MainService) {}
 
   async ngOnInit() {
     if (this.record == undefined) {
       this.demonstrateRecord = false;
     }
   }

   ngDoCheck() {
    this.hide1 = true;
    this.hide2 = true;
    this.hide3 = true;
    if (localStorage.getItem("role") == "1") {
      this.hide1 = false;
      this.hide2 = false;
      this.hide3 = false;
    }
    if (localStorage.getItem("role") == "2") {
      this.hide1 = true;
      this.hide2 = false;
      this.hide3 = true;
    }
    if (localStorage.getItem("role") == "3") {
      this.hide1 = true;
      this.hide2 = true;
      this.hide3 = false;
    }
  }
 
 
   // Функция удаления товара из БД
   async onDeleteRecord(id_record) {
     try {
       let result = await this.mainService.delete(`/deleteRecord/${id_record}`);
     } catch (error) {
       console.log(error);
     }
     this.delete.emit(id_record);
   }
   async onChangeStatus(id_record){
    try {
      let newRecord = new Record(
        this.record.id_record,
        this.record.beautican,
        this.record.service,
        this.record.id,
        this.record.data,
        this.record.time,
        this.record.cost,
        this.record.status = "Запись оплачена"
      );
      let result = await this.mainService.put(
        JSON.stringify(newRecord),
        `/changeStatus/${id_record}`);
        // this.router.navigate(["record-admin"]);
    } catch (error) {
      console.log(error);
    }
   }
    }
 
