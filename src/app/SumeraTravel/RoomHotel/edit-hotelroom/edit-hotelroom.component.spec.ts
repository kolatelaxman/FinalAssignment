import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHotelroomComponent } from './edit-hotelroom.component';

describe('EditHotelroomComponent', () => {
  let component: EditHotelroomComponent;
  let fixture: ComponentFixture<EditHotelroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHotelroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHotelroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
