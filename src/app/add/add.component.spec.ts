import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponent ]
    })
    .compileComponents();

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,RouterTestingModule.withRoutes([]), ]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

});
