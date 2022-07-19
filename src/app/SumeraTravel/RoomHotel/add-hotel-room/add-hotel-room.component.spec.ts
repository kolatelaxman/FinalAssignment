import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHotelRoomComponent } from './add-hotel-room.component';

describe('AddHotelRoomComponent', () => {
  let component: AddHotelRoomComponent;
  let fixture: ComponentFixture<AddHotelRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHotelRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHotelRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
