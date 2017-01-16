/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TellerTotalsService } from './teller-totals.service';

describe('TellerTotalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TellerTotalsService]
    });
  });

  it('should ...', inject([TellerTotalsService], (service: TellerTotalsService) => {
    expect(service).toBeTruthy();
  }));
});
