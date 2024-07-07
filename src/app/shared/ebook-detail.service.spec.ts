import { TestBed } from '@angular/core/testing';

import { EbookDetailService } from './ebook-detail.service';

describe('EbookDetailService', () => {
  let service: EbookDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbookDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
