import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeauticiansComponent } from './beauticians.component';

describe('BeauticiansComponent', () => {
  let component: BeauticiansComponent;
  let fixture: ComponentFixture<BeauticiansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeauticiansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeauticiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
