import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHolidayBookingComponent } from './add-holiday-booking.component';

describe('AddHolidayBookingComponent', () => {
  let component: AddHolidayBookingComponent;
  let fixture: ComponentFixture<AddHolidayBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHolidayBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHolidayBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
