import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardserviceGuard } from './guardservice.guard';

describe('guardserviceGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardserviceGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
