import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateholidaylistComponent } from './updateholidaylist.component';

describe('UpdateholidaylistComponent', () => {
  let component: UpdateholidaylistComponent;
  let fixture: ComponentFixture<UpdateholidaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateholidaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateholidaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
