import { TestBed } from '@angular/core/testing';

import { FerLibService } from './fer-lib.service';

describe('FerLibService', () => {
  let service: FerLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FerLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
