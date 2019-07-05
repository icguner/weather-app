import { TestBed } from '@angular/core/testing';

import { ApitalkService } from './apitalk.service';

describe('ApitalkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApitalkService = TestBed.get(ApitalkService);
    expect(service).toBeTruthy();
  });
});
