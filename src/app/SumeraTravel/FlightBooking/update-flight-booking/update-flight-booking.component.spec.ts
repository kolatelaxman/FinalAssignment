import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlightBookingComponent } from './update-flight-booking.component';

describe('UpdateFlightBookingComponent', () => {
  let component: UpdateFlightBookingComponent;
  let fixture: ComponentFixture<UpdateFlightBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFlightBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFlightBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
