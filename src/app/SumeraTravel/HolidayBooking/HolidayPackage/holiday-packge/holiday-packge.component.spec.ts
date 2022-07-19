import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayPackgeComponent } from './holiday-packge.component';

describe('HolidayPackgeComponent', () => {
  let component: HolidayPackgeComponent;
  let fixture: ComponentFixture<HolidayPackgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayPackgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayPackgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
