import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../shared/services/main.service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {
// Логическая переменная определяющая наличие или отсуствие кнопки Удалить в карточке
hide1 = true;
hide2 = true;
hide3 = true;
demonstrateService = true;
@Input() service;
@Output() del = new EventEmitter<number>();

constructor(private router: Router, private mainService: MainService) {}

async ngOnInit() {
  if (this.service == undefined) {
    this.demonstrateService = false;
  }
}

// Хук жизненного цикла по изменению
// Проверяет наличие в LocalStorage элемента роли, чтобы понять авторизирован пользователь или нет
ngDoCheck() {
  this.hide1 = true;
  this.hide2 = true;
  this.hide3 = true;
  if (localStorage.getItem("role") == "1") {
    this.hide1 = false;
    this.hide2 = true;
    this.hide3 = true;
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

// Функция, которая переводит на страницу карточки выбранной услуги по клику
onLinkService(id) {
  this.router.navigate(["/services", id]);
}

// Функция, которая переводит на страницу записи на услугу
onLinkRecordService(id) {
  this.router.navigate(["/record-master", id]);
}

// Функция удаления товара из БД
async onDeleteService(id) {
  try {
    let result = await this.mainService.delete(`/delete/${id}`);
  } catch (error) {
    console.log(error);
  }
  this.del.emit(id);
}
}

