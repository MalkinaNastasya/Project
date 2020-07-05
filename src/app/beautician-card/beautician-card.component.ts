import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../shared/services/main.service';

@Component({
  selector: 'app-beautician-card',
  templateUrl: './beautician-card.component.html',
  styleUrls: ['./beautician-card.component.css']
})
export class BeauticianCardComponent implements OnInit {
// Логическая переменная определяющая наличие или отсуствие кнопки Удалить в карточке
hide1 = true;
hide2 = true;
hide3 = true;
demonstrateBeautician = true;
@Input() beautician;
@Output() del = new EventEmitter<number>();

constructor(private router: Router, private mainService: MainService) {}

async ngOnInit() {
  if (this.beautician == undefined) {
    this.demonstrateBeautician = false;
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

// Функция удаления косметолога из БД
async onDeleteService(id) {
  try {
    let result = await this.mainService.delete(`/delete-beautician/${id}`);
  } catch (error) {
    console.log(error);
  }
  this.del.emit(id);
}
}

