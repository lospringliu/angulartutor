import { TestBed, inject } from '@angular/core/testing';

import { OsService } from './os.service';

describe('OsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OsService]
    });
  });

  it('should be created', inject([OsService], (service: OsService) => {
    expect(service).toBeTruthy();
  }));
});
