import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayBookingComponent } from './holiday-booking.component';

describe('HolidayBookingComponent', () => {
  let component: HolidayBookingComponent;
  let fixture: ComponentFixture<HolidayBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
