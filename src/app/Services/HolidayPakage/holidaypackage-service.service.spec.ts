import { TestBed } from '@angular/core/testing';

import { HolidaypackageServiceService } from './holidaypackage-service.service';

describe('HolidaypackageServiceService', () => {
  let service: HolidaypackageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidaypackageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
