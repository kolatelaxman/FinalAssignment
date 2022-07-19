import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightShceduleComponent } from './add-flight-shcedule.component';

describe('AddFlightShceduleComponent', () => {
  let component: AddFlightShceduleComponent;
  let fixture: ComponentFixture<AddFlightShceduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlightShceduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlightShceduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
