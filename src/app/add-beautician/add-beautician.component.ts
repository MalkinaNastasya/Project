import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-beautician',
  templateUrl: './add-beautician.component.html',
  styleUrls: ['./add-beautician.component.css']
})
export class AddBeauticianComponent implements OnInit {

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
      'sername': new FormControl('', [Validators.required]),
      'role': new FormControl('', [Validators.required]),
      'info': new FormControl('', [Validators.required]),
      'services': new FormControl('', [Validators.required]),
      })
  }

  // Функция добавления информации об услуге, полученной с формы, в базу данных
  async onAdd(){   
    if ((this.form.value.name=="")||(this.form.value.sername=="")||(this.form.value.role=="")||(this.form.value.info=="")||(this.form.value.services=="")) {
      this.isEmpty=false;
    } else {
      this.isEmpty=true;
      let beautician = {
        name: this.form.value.name,
        sername: this.form.value.sername,
        role: this.form.value.role,
        info: this.form.value.info,
        services: this.form.value.services,
      }
      console.log(beautician);
      try {;
        let result = await this.mainService.post(JSON.stringify(beautician), "/add-beautician");
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

