import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateholidayComponent } from './updateholiday.component';

describe('UpdateholidayComponent', () => {
  let component: UpdateholidayComponent;
  let fixture: ComponentFixture<UpdateholidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateholidayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateholidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
