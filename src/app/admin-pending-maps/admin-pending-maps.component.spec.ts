import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPendingMapsComponent } from './admin-pending-maps.component';

describe('AdminPendingMapsComponent', () => {
  let component: AdminPendingMapsComponent;
  let fixture: ComponentFixture<AdminPendingMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPendingMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPendingMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
