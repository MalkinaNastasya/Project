import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { Beautician } from '../shared/modals/beautician.modal';

@Component({
  selector: 'app-beauticians',
  templateUrl: './beauticians.component.html',
  styleUrls: ['./beauticians.component.css']
})
export class BeauticiansComponent implements OnInit {


service_filter: boolean;
search_beautician = "";

// Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях
loading = false;
// Логическая переменная, определяющая наличие или отсутсвие ссылки на страницу добавления нового товара
hide1 = true;
hide2 = true;
hide3 = true;
// Логическая переменная, определяющая наличие или отсутсвие сообщения о ненайденных товарах
notfound = false;
beauticians: Beautician[] = [];
constructor(private mainService: MainService) {}

async ngOnInit() {
  // Получение списка всех сотрудников,  имеющихся в БД
  this.loading = true;
  try {
    let result = await this.mainService.get("/beauticians");
    if (Object.keys(result).length == 0) {
      console.log("пусто");
      result = undefined;
    }
    if (typeof result !== "undefined") {
      this.notfound = false;
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
      }
    } else {
      this.notfound = true;
    }
  } catch (error) {
    console.log(error);
  }
  this.loading = false;
}

// Хук жизненного цикла по изменению
// Проверяет наличие в LocalStorage элемента роли, чтобы понять авторизирован пользователь или нет
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
    this.hide3 = false;
  }
  if (localStorage.getItem("role") == "3") {
    this.hide1 = true;
    this.hide2 = true;
    this.hide3 = false;
  }
}

// Удаление из локального массива товаров определенного товара по id
onDeleteService(id) {
  let index = this.beauticians.findIndex((el) => {
    return el.id == id;
  });
  this.beauticians.splice(index, 1);
  if (this.beauticians.length == 0) {
    this.notfound = true;
  }
}
}