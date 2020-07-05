import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;

  // Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях 
  isEmpty=true;
  // Логическая переменная, определяющая наличие или отсутсвие сообщения об успешном добавлении услуги
  succes=false;
  api: any;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Инициализация FormGroup, создание FormControl, и назанчение Validators
    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'time': new FormControl('', [Validators.required]),
      'cost': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators.required]),
      })
  }

  // Функция добавления информации об услуге, полученной с формы, в базу данных
  async onAdd(){   
    if ((this.form.value.name=="")||(this.form.value.description=="")||(this.form.value.time=="")||(this.form.value.cost=="")) {
      this.isEmpty=false;
    } else {
      this.isEmpty=true;
      let service = {
        name: this.form.value.name,
        description: this.form.value.description,
        time: this.form.value.time,
        cost: this.form.value.cost,
      }
      console.log(service);
      try {;
        let result = await this.mainService.post(JSON.stringify(service), "/add_services");
      } catch (err) {
        console.log(err);
      }
      this.form.reset();
      this.succes=true;
    }   
  }
// Функция, скрывающая сообщения о незаполненности полей и успешном добавлении услуги (вызвается при фокусировке на одном из полей формы)
  onSucces(){
    this.succes=false;
    this.isEmpty=true;
  }

}
