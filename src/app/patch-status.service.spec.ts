import { TestBed, inject } from '@angular/core/testing';

import { PatchStatusService } from './patch-status.service';

describe('PatchStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatchStatusService]
    });
  });

  it('should be created', inject([PatchStatusService], (service: PatchStatusService) => {
    expect(service).toBeTruthy();
  }));
});
