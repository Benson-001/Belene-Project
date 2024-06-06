import { TestBed } from '@angular/core/testing';

import { GashboardService } from './gashboard.service';

describe('GashboardService', () => {
  let service: GashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
