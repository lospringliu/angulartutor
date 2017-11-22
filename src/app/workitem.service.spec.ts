import { TestBed, inject } from '@angular/core/testing';

import { WorkitemService } from './workitem.service';

describe('WorkitemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkitemService]
    });
  });

  it('should be created', inject([WorkitemService], (service: WorkitemService) => {
    expect(service).toBeTruthy();
  }));
});
