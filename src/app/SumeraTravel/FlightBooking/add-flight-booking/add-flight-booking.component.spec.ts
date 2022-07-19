import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightBookingComponent } from './add-flight-booking.component';

describe('AddFlightBookingComponent', () => {
  let component: AddFlightBookingComponent;
  let fixture: ComponentFixture<AddFlightBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlightBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlightBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
