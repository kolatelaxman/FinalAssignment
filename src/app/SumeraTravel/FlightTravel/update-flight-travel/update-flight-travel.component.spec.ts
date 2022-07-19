import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlightTravelComponent } from './update-flight-travel.component';

describe('UpdateFlightTravelComponent', () => {
  let component: UpdateFlightTravelComponent;
  let fixture: ComponentFixture<UpdateFlightTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFlightTravelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFlightTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
