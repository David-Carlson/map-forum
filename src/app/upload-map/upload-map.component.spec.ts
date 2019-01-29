import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMapComponent } from './upload-map.component';

describe('UploadMapComponent', () => {
  let component: UploadMapComponent;
  let fixture: ComponentFixture<UploadMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
