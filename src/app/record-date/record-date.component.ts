import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from '../shared/services/main.service';
import * as moment from 'moment';

@Component({
  selector: 'app-record-date',
  templateUrl: './record-date.component.html',
  styleUrls: ['./record-date.component.css']
})
export class RecordDateComponent implements OnInit {
 
  // Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях
  isEmpty = true;
  // Логическая переменная, определяющая наличие или отсутсвие сообщения об успешном добавлении заявки на обратный звонок
  succes=false;

  today=new Date();
  minDate: Date;

  record = {
    id_record: "",
    id_beautician: null,
    id_service: null,
    id: null,
    date: null,
    time: null,
    cost: null
  };

  service: any = {
    id_service: "",
    name: "",
    description: "",
    cost: "",
    time: "",
  };

  recordFrom: FormGroup;
  
  beautician: any = {
    id_beautician: null, 
    name: null,
    sername: null,
    role: null,
    info: null,
    services: null,
  };

  res;
  convertedDate;

  constructor(    
    private router: Router,
    private activateRouter: ActivatedRoute,
    private mainService: MainService
  ) {
    this.activateRouter.queryParams.subscribe((queryParams) => {
      this.record.id_beautician = +queryParams.id_beautician;
      this.record.id_service = +queryParams.id_service;
      this.record.id = +queryParams.id;     
      this.record.cost = +queryParams.cost;
    });
    console.log(this.record);
    
    // Инициализация FormGroup, создание FormControl, и назанчение Validators
    this.recordFrom = new FormGroup({
      date: new FormControl("", [Validators.required])
    });
  }

  async ngOnInit() {
    // Отправка на сервер запроса для получения карточки товара по id    
    try {
      this.res = await this.mainService.post(
        JSON.stringify(this.record),
        "/oneMaster"
      );
    } catch (error) {
      console.log(error);
    }
    this.beautician = this.res[0];
    console.log(this.beautician);

    // Отправка на сервер запроса для получения карточки товара по id    
    try {
      this.res = await this.mainService.post(
        JSON.stringify(this.record),
        "/oneServiceRecord"
      );
    } catch (error) {
      console.log(error);
    }
    this.service = this.res[0];
    console.log(this.service);
  }

  
  // Функция, которая переводит на страницу записи на услугу
  onLinkRecordDate() {
    this.router.navigate(["record-time/record"],  { queryParams: {
      id_beautician: this.record.id_beautician,
      id_service: this.record.id_service, 
      id: this.record.id, 
      cost: this.record.cost,
      date: moment(this.recordFrom.value.date).locale('ru').format('L')
    }
    });    
  }

  // Функция, скрывающая сообщения о незаполненности полей и успешном добавлении товара (вызвается при фокусировке на одном из полей формы)
  onSucces(){
    this.succes=false;
    this.isEmpty=true;
  }
}

