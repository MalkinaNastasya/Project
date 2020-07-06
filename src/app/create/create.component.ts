import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Service } from '../shared/modals/service.modal';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  service_filter: boolean;
  search_service = "";
 
  // Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях
  loading = false;
  // Логическая переменная, определяющая наличие или отсутсвие ссылки на страницу добавления нового товара
  hide1 = true;
  hide2 = true;
  hide3 = true;
  // Логическая переменная, определяющая наличие или отсутсвие сообщения о ненайденных товарах
  notfound = false;
  services: Service[] = [];
  constructor(private mainService: MainService) {}
 
  async ngOnInit() {
    // Получение списка всех услуг,  имеющихся в БД
    this.loading = true;
    try {
      let result = await this.mainService.get("/services");
      if (Object.keys(result).length == 0) {
        console.log("пусто");
        result = undefined;
      }
      if (typeof result !== "undefined") {
        this.notfound = false;
        console.log(result);
        for (const one in result) {
          this.services.push(
            new Service(
              result[one].id,
              result[one].name,
              result[one].time,
              result[one].cost,
              result[one].description,
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

 
  // Удаление из локального массива товаров определенного товара по id
  onDeleteService(id) {
    let index = this.services.findIndex((el) => {
      return el.id == id;
    });
    this.services.splice(index, 1);
    if (this.services.length == 0) {
      this.notfound = true;
    }
  }
 }