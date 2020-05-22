import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeauticiansComponent } from './beauticians.component';
import { Beautician } from '../shared/modals/beautician.modal';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('BeauticiansComponent', () => {
  let component: BeauticiansComponent;
  let fixture: ComponentFixture<BeauticiansComponent>;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeauticiansComponent ]
    })
    .compileComponents();

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,RouterTestingModule.withRoutes([]), ]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    fixture = TestBed.createComponent(BeauticiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve all beauticians', () => {
    const beauticians:Beautician[] = [
    {id:1, name:"Инна Маркова", role:"Косметолог", services:"Чистка лица, массаж лица, уколы красоты"},
      {id:2, name:"Светлана Рыбкина", role:"Косметолог", services:"Чистка лица, массаж лица, уколы красоты"},
    ];
    component.getBeautician().then(response =>{
      expect(response).toEqual(beauticians);
    });
  });
})
