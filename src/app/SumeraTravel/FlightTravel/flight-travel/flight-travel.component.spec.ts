import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTravelComponent } from './flight-travel.component';

describe('FlightTravelComponent', () => {
  let component: FlightTravelComponent;
  let fixture: ComponentFixture<FlightTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightTravelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
