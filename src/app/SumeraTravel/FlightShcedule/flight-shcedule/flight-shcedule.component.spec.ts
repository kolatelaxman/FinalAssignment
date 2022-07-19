import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightShceduleComponent } from './flight-shcedule.component';

describe('FlightShceduleComponent', () => {
  let component: FlightShceduleComponent;
  let fixture: ComponentFixture<FlightShceduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightShceduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightShceduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
