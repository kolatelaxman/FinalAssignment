import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlightShceduleComponent } from './update-flight-shcedule.component';

describe('UpdateFlightShceduleComponent', () => {
  let component: UpdateFlightShceduleComponent;
  let fixture: ComponentFixture<UpdateFlightShceduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFlightShceduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFlightShceduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
