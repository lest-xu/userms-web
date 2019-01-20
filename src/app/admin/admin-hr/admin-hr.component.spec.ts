import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHrComponent } from './admin-hr.component';

describe('AdminHrComponent', () => {
  let component: AdminHrComponent;
  let fixture: ComponentFixture<AdminHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
