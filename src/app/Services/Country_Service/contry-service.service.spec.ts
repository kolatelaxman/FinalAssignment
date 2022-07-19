import { TestBed } from '@angular/core/testing';

import { ContryServiceService } from './contry-service.service';

describe('ContryServiceService', () => {
  let service: ContryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
