import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from '../shared/services/main.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  // Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях 
  isEmpty=true;
  // Логическая переменная, определяющая наличие или отсутсвие сообщения об успешной регистрации
  succes=false;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Инициализация FormGroup, создание FormControl, и назанчение Validators
    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'sername': new FormControl('', [Validators.required]),
      'phone': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'login': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
      })
  }

  // Функция добавления информации о клиенте, полученной с формы, в базу данных
  async onAdd(){   
    if ((this.form.value.name=="")||(this.form.value.sername=="")||(this.form.value.phone=="")||(this.form.value.email=="")||(this.form.value.login=="")||(this.form.value.password=="")) {
      this.isEmpty=false;
    } else {
      this.isEmpty=true;
      let client = {
        name: this.form.value.name,
        sername: this.form.value.sername,
        phone: this.form.value.phone,
        email: this.form.value.email,
        login: this.form.value.login,
        password: this.form.value.password,
      }
      console.log(client);
      try {;
        let result = await this.mainService.post(JSON.stringify(client), "/add");
      } catch (err) {
        console.log(err);
      }
      this.form.reset();
      this.succes=true;
    }   
  }
// Функция, скрывающая сообщения о незаполненности полей и успешном добавлении клиента (вызвается при фокусировке на одном из полей формы)
  onSucces(){
    this.succes=false;
    this.isEmpty=true;
  }


}
