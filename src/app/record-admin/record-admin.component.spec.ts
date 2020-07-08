import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordAdminComponent } from './record-admin.component';

describe('RecordAdminComponent', () => {
  let component: RecordAdminComponent;
  let fixture: ComponentFixture<RecordAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
