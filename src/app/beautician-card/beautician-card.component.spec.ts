import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeauticianCardComponent } from './beautician-card.component';

describe('BeauticianCardComponent', () => {
  let component: BeauticianCardComponent;
  let fixture: ComponentFixture<BeauticianCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeauticianCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeauticianCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
