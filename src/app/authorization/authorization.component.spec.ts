import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthorizationComponent } from './authorization.component';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('AuthorizationComponent', () => {
  let component: AuthorizationComponent;
  let fixture: ComponentFixture<AuthorizationComponent>;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationComponent ]
    })
    .compileComponents();

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,RouterTestingModule.withRoutes([]), ]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    fixture = TestBed.createComponent(AuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('authorization form should be completed', () => {
    const login = component.form.get('login');
    const password = component.form.get('password');
    login.setValue('');
    password.setValue('');
    expect(component.form.valid).toBeFalsy();
  });
})