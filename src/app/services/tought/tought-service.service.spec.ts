import { TestBed } from '@angular/core/testing';

import { ToughtServiceService } from './tought.service';

describe('ToughtServiceService', () => {
  let service: ToughtServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToughtServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
