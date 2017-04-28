import { TestBed, inject } from '@angular/core/testing';

import { AuthRouteProtectionService } from './auth-route-protection.service';

describe('AuthRouteProtectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRouteProtectionService]
    });
  });

  it('should ...', inject([AuthRouteProtectionService], (service: AuthRouteProtectionService) => {
    expect(service).toBeTruthy();
  }));
});
