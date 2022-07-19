import { TestBed } from '@angular/core/testing';

import { AirlineServicesService } from './airline-services.service';

describe('AirlineServicesService', () => {
  let service: AirlineServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirlineServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
