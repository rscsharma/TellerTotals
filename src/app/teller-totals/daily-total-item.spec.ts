/* tslint:disable:no-unused-variable */

import { DailyTotalItem } from './daily-total-item';

describe('DailyTotalItem', () => {

  let dailyTotalItem = new DailyTotalItem("title", 55.55, 2);

  it('should have a title property set to \'title\'', () => {
    expect(dailyTotalItem.title).toBe('title');
  });

  it('should have an amount property set to \'55.55\'', () => {
    expect(dailyTotalItem.amount).toBe('55.55');
  });
});
