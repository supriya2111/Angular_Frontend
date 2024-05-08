import { TestBed } from '@angular/core/testing';

import { TrekkService } from './trekk.service';

describe('TrekkService', () => {
  let service: TrekkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrekkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
