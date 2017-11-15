import { TestBed, inject } from '@angular/core/testing';

import { OsCategoryService } from './os-category.service';

describe('OsCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OsCategoryService]
    });
  });

  it('should be created', inject([OsCategoryService], (service: OsCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
