import { TestBed, inject } from '@angular/core/testing';

import { UnitdataService } from './unitdata.service';

describe('UnitdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitdataService]
    });
  });

  it('should be created', inject([UnitdataService], (service: UnitdataService) => {
    expect(service).toBeTruthy();
  }));
});
