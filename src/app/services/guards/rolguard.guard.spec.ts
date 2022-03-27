import { TestBed } from '@angular/core/testing';

import { RolguardGuard } from './rolguard.guard';

describe('RolguardGuard', () => {
  let guard: RolguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RolguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
