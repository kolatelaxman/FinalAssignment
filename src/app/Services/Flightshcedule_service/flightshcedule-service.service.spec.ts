import { TestBed } from '@angular/core/testing';

import { FlightshceduleServiceService } from './flightshcedule-service.service';

describe('FlightshceduleServiceService', () => {
  let service: FlightshceduleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightshceduleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
