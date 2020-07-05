import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCardViewComponent } from './service-card-view.component';

describe('ServiceCardViewComponent', () => {
  let component: ServiceCardViewComponent;
  let fixture: ComponentFixture<ServiceCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
