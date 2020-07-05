import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeauticianComponent } from './add-beautician.component';

describe('AddBeauticianComponent', () => {
  let component: AddBeauticianComponent;
  let fixture: ComponentFixture<AddBeauticianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBeauticianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeauticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
