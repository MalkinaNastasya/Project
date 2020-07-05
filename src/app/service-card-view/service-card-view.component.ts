import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from '../shared/services/main.service';
import { Service } from '../shared/modals/service.modal';

@Component({
  selector: 'app-service-card-view',
  templateUrl: './service-card-view.component.html',
  styleUrls: ['./service-card-view.component.css']
})
export class ServiceCardViewComponent implements OnInit {
  @Output() del = new EventEmitter<number>();
  // Логическая переменная, определяющая наличие или отсутсвие прелоадера
  loading = false;
  // Лoгическая переменная, определяющая режим чтения или редактирования включен
  editOrNot = true;
  res;
  heart = false;
  hide3 = true;
  hide2 = true;
  hide1 = true;
  formService: FormGroup;
  service: any = {
    id_service: "",
    name: "",
    time: "",
    description: "",
    cost: "",
  };
  item = {
    id: 0,
  };
  // Получение параметра роута id
  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private mainService: MainService
  ) {
    this.activateRouter.params.subscribe((param) => {
      this.item.id = +param.id_service;
    });
  }

  async ngOnInit() {            
    this.loading = true;
    // Отправка на сервер запроса для получения карточки товара по id
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
    this.loading = false;
    if (this.service.id_service != "") {
      // Инициализация FormGroup, создание FormControl, и назанчение Validators
      this.formService = new FormGroup({
        cost: new FormControl(`${this.service.cost}`, [Validators.required]),
        name: new FormControl(`${this.service.name}`, [Validators.required]),
        time: new FormControl(`${this.service.time}`, [Validators.required]),
        description: new FormControl(`${this.service.description}`, [
          Validators.required,
        ]),
      });
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
  // Отправляет запрос удаления карточки на сервер
  async onDeleteService() {
    try {
      let result = await this.mainService.delete(`/delete/${this.service.id}`);
    } catch (error) {
      console.log(error);
    }
    this.del.emit(this.service.id);
    this.router.navigate(["/catalog"]);
  }
  // Оправляет запрос изменения информации в карточки на сервер или включает режим редактирования
  async onChangeService() {
    if (!this.editOrNot) {
      let newService = new Service(
        this.service.id,
        this.formService.value.name,
        this.formService.value.time,
        this.formService.value.description,
        this.formService.value.cost,
      );
      console.log(this.service.id);
      
      try {
        let res = await this.mainService.put(
          JSON.stringify(newService),
          `/services/${this.service.id}`
        );
      } catch (error) {
        console.log(error);
      }
      this.service.name = this.formService.value.name;
      this.service.time = this.formService.value.time;
      this.service.cost = this.formService.value.cost;
      this.service.description = this.formService.value.description;
    }
    this.editOrNot = !this.editOrNot;
  }
}
