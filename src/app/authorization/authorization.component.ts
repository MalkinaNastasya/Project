import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from '../shared/services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
// Логическая переменная, определяющая наличие или отсутсвие сообщения о неправильном логине или пароле 
notExistLoginOrPassword=true;
// Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях 
isEmpty=true;
form :FormGroup;
admin = {
  id: 1,
  login: "",
  password: "",
  role: ""
}

constructor(private api: MainService, private router: Router) { }

ngOnInit() {
  // Инициализация FormGroup, создание FormControl, и назанчение Validators
  this.form = new FormGroup({
    'login': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required]) 
  });
}

// Функция входа, отправляющая данные, полученные с формы на сервер, и реагирующая на ответ с сервера
async onLogin() {
  if ((this.form.value.login=="")||(this.form.value.password=="")) {
    this.isEmpty=false;
  } else
  {
    this.isEmpty=true;
    let infoAboutUser;
  infoAboutUser = {
    login: this.form.value.login,
    password: this.form.value.password,
  }
  console.log(infoAboutUser);
  try {
    let ExistOrNot = await this.api.post(JSON.stringify(infoAboutUser), "/login");
    this.form.reset();  
    if (ExistOrNot != "not exist") {
      this.admin.id = +ExistOrNot[0].id;
      this.admin.login = ExistOrNot[0].login;
      this.admin.password = ExistOrNot[0].password;
      this.admin.role = ExistOrNot[0].role; 
      console.log(this.admin);       
      this.notExistLoginOrPassword = true;
      localStorage.setItem('role', this.admin.role);
      this.router.navigate(['/admin']);
      
    } else {
      this.notExistLoginOrPassword = false;
      console.log("Неверный логин или пароль");
    } 
  } catch (error) {
    console.log(error);
  }
  }
  
 }

 // Функция, убирает сообщения о неправильном логине или пароле и о незаполненных полях
 onFlag(){
   this.notExistLoginOrPassword=true;  
   this.isEmpty=true;
 }
 
}
