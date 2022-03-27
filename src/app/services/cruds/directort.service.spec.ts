import { TestBed } from '@angular/core/testing';

import { DirectortService } from './directort.service';

describe('DirectortService', () => {
  let service: DirectortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
