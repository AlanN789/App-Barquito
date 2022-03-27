import { TestBed } from '@angular/core/testing';

import { EstadiosService } from './estadios.service';

describe('EstadiosService', () => {
  let service: EstadiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
