import { TestBed } from '@angular/core/testing';

import { RoomAmenitiesService } from './room-amenities.service';

describe('RoomAmenitiesService', () => {
  let service: RoomAmenitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomAmenitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
