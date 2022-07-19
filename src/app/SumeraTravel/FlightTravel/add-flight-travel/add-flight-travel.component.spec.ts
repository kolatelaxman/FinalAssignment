import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightTravelComponent } from './add-flight-travel.component';

describe('AddFlightTravelComponent', () => {
  let component: AddFlightTravelComponent;
  let fixture: ComponentFixture<AddFlightTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlightTravelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlightTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
