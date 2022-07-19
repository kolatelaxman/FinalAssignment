import { TestBed } from '@angular/core/testing';

import { FlightTravelService } from './flight-travel.service';

describe('FlightTravelService', () => {
  let service: FlightTravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightTravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
