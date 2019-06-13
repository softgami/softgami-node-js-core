import { TestBed } from '@angular/core/testing';

import { SoftgamiNodejsCoreService } from './softgami-nodejs-core.service';

describe('SoftgamiNodejsCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoftgamiNodejsCoreService = TestBed.get(SoftgamiNodejsCoreService);
    expect(service).toBeTruthy();
  });
});
