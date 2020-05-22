import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ]
    })
    .compileComponents();

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,RouterTestingModule.withRoutes([]), ]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('registration form should be completed', () => {
    const name = component.form.get('name');
    const sername = component.form.get('sername');
    const phone = component.form.get('phone');
    const email = component.form.get('email');
    const login = component.form.get('login');
    const password = component.form.get('password');
    name.setValue('');
    sername.setValue('');
    phone.setValue('');
    email.setValue('');
    login.setValue('');
    password.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

    it ('should be valid email', () => {
    const email = component.form.get('email');
    email.setValue('123test456');
    expect(component.form.valid).toBeFalsy();
    });
});
