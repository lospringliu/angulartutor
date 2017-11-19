import { TestBed, inject } from '@angular/core/testing';

import { ProductBuildService } from './product-build.service';

describe('ProductBuildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductBuildService]
    });
  });

  it('should be created', inject([ProductBuildService], (service: ProductBuildService) => {
    expect(service).toBeTruthy();
  }));
});
