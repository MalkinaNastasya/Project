import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from '../shared/services/main.service';
import { Beautician } from '../shared/modals/beautician.modal';

@Component({
  selector: 'app-record-master',
  templateUrl: './record-master.component.html',
  styleUrls: ['./record-master.component.css']
})
export class RecordMasterComponent implements OnInit {

  // Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях
  isEmpty = true;
  // Логическая переменная, определяющая наличие или отсутсвие сообщения об успешном добавлении заявки на обратный звонок
  succes=false;
  recordFrom: FormGroup;

  beauticians: Beautician[] = [];
  record = {
    id_record: "",
    id_beautician: 0,
    id_service: 0,
    id: "",
    date: "",
    time: "",
    cost: ""
  };

  item = {
    id: 0,
  };

  service: any = {
    id_service: "",
    name: "",
    description: "",
    cost: "",
    time: "",
  };

  res;
  name_beautician;
  name_time;

  constructor(    
    private router: Router,
    private activateRouter: ActivatedRoute,
    private mainService: MainService
  ) {
    this.activateRouter.params.subscribe((param) => {
      this.item.id = +param.id_service;
    });

    this.recordFrom = new FormGroup({
      id_beautician: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      time: new FormControl("", [Validators.required])
    });
  }

  async ngOnInit() {
    try {
      this.res = await this.mainService.post(
        JSON.stringify(this.item),
        "/oneService"
      );
    } catch (error) {
      console.log(error);
    }
    this.service = this.res[0];
    console.log(this.service);
    try {
      let result = await this.mainService.get(`/beauticians`);
      if (typeof result !== "undefined") {
        console.log(result);
        for (const one in result) {
          this.beauticians.push(
            new Beautician(
              result[one].id,
              result[one].name,
              result[one].sername,
              result[one].role,
              result[one].info,
              result[one].services,
            )
          );
          if (result[one].id == this.recordFrom.value.id_beautician)
          this.name_beautician = result[one].name + " " + result[one].sername;
        }        
      }
    } catch (error) {
      console.log(error);
    }
    // this.record.id = localStorage.getItem("id");
    // this.record.id_service = this.item.id;
    // console.log(this.record);
  }

  async onAddRecord() {
    try {
      let result = await this.mainService.get(`/beauticians`);
      if (typeof result !== "undefined") {
        console.log(result);
        for (const one in result) {
          this.beauticians.push(
            new Beautician(
              result[one].id,
              result[one].name,
              result[one].sername,
              result[one].role,
              result[one].info,
              result[one].services,
            )
          );
          if (result[one].id == this.recordFrom.value.id_beautician)
          this.name_beautician = result[one].name + " " + result[one].sername;
        }        
      }
    } catch (error) {
      console.log(error);
    }
    if (this.recordFrom.value.time == "") {
      this.isEmpty = false;
    } else {
      let record = {
        beautican: this.name_beautician,
        service: this.service.name,
        id: localStorage.getItem("id"),
        data: this.recordFrom.value.date,
        time: this.recordFrom.value.time,
        cost: this.service.cost,
        status: "Запись создана"
      }
      this.isEmpty = true;
      console.log(record);
      try {
        let result = await this.mainService.post(
          JSON.stringify(record),
          "/record"
        );
      } catch (err) {
        console.log(err);
      }
      this.recordFrom.reset();
      this.succes = true;
      this.router.navigate(["profile"]);
    }
  }
  
  // Функция, скрывающая сообщения о незаполненности полей и успешном добавлении товара (вызвается при фокусировке на одном из полей формы)
  onSuccess() {
    this.succes = false;
    this.isEmpty = true;
  }

}
