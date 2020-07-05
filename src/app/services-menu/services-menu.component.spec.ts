import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMenuComponent } from './services-menu.component';

describe('ServicesMenuComponent', () => {
  let component: ServicesMenuComponent;
  let fixture: ComponentFixture<ServicesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
