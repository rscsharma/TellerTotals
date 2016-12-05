import { Injectable } from '@angular/core';
import { TellerTotalsServiceResult } from './teller-totals-service-result';
import { CurrencyTypes } from './currency-types.enum';
import { DailyTotalTypes } from './daily-total-types.enum';

@Injectable()
export class TellerTotalsService {

  constructor() { }

  getTotals(): TellerTotalsServiceResult {

    let result: TellerTotalsServiceResult = new TellerTotalsServiceResult(); 

    result.currencyTypes.set(CurrencyTypes.Hundreds, 18);
    result.currencyTypes.set(CurrencyTypes.Fifties, 10);
    result.currencyTypes.set(CurrencyTypes.Twenties, 10);
    result.currencyTypes.set(CurrencyTypes.Tens, 10);
    result.currencyTypes.set(CurrencyTypes.Fives, 2);
    result.currencyTypes.set(CurrencyTypes.Twos, 4);
    result.currencyTypes.set(CurrencyTypes.Ones, 27);

    result.dailyTotalTypes.set(DailyTotalTypes.EndingCash, 6554.54);
    result.dailyTotalTypes.set(DailyTotalTypes.ChecksReceived, 46817.17);
    result.dailyTotalTypes.set(DailyTotalTypes.MoneyOrders, 100);
    result.dailyTotalTypes.set(DailyTotalTypes.TravelersChecks, 50);
    result.dailyTotalTypes.set(DailyTotalTypes.ChecksDisbursed, 200);
    result.dailyTotalTypes.set(DailyTotalTypes.SecondaryChecks, 0);
    result.dailyTotalTypes.set(DailyTotalTypes.BondClearing, 25);
    result.dailyTotalTypes.set(DailyTotalTypes.BeginingForeign, 55.50);
    result.dailyTotalTypes.set(DailyTotalTypes.EndingForeign, 45.50);

    return result;
  }
}
