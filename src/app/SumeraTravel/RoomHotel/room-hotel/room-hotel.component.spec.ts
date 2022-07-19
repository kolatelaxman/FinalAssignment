import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHotelComponent } from './room-hotel.component';

describe('RoomHotelComponent', () => {
  let component: RoomHotelComponent;
  let fixture: ComponentFixture<RoomHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
