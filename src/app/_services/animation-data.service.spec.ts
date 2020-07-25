import { TestBed } from '@angular/core/testing';

import { AnimationDataService } from './animation-data.service';

describe('AnimationDataService', () => {
  let service: AnimationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
