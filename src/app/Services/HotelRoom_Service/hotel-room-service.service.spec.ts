import { TestBed } from '@angular/core/testing';

import { HotelRoomServiceService } from './hotel-room-service.service';

describe('HotelRoomServiceService', () => {
  let service: HotelRoomServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelRoomServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
