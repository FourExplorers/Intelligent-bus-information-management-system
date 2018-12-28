import { TestBed } from '@angular/core/testing';

import { SubmitLineService } from './submit-line.service';

describe('SubmitLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitLineService = TestBed.get(SubmitLineService);
    expect(service).toBeTruthy();
  });
});
