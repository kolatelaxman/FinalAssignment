import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelclassComponent } from './travelclass.component';

describe('TravelclassComponent', () => {
  let component: TravelclassComponent;
  let fixture: ComponentFixture<TravelclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
