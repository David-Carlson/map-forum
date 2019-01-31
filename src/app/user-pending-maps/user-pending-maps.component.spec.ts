import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPendingMapsComponent } from './user-pending-maps.component';

describe('UserPendingMapsComponent', () => {
  let component: UserPendingMapsComponent;
  let fixture: ComponentFixture<UserPendingMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPendingMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPendingMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
