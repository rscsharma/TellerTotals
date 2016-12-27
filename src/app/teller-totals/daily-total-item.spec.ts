/* tslint:disable:no-unused-variable */

import { DailyTotalItem } from './daily-total-item';
import { DailyTotalTypes } from '../services/daily-total-types.enum';

describe('DailyTotalItem', () => {

  let dailyTotalItem = new DailyTotalItem(DailyTotalTypes.EndingCash, 55, 2);

  it('should have a dailyTotalType property set to \'DailyTotalTypes.EndingCash\'', () => {
    expect(dailyTotalItem.dailyTotalType).toBe(DailyTotalTypes.EndingCash);
  });

  it('should have an amount property set to \'55.00\'', () => {
    expect(dailyTotalItem.amount).toBe('55.00');
  });

  it('should have a title property set to \'Ending Cash\'', () => {
    expect(dailyTotalItem.title).toBe('Ending Cash');
  });
});
