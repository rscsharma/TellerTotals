import { CurrencyTypes } from './currency-types.enum';
import { DailyTotalTypes } from './daily-total-types.enum';

export class TellerTotalsServiceResult {
    currencyTypes: Map<CurrencyTypes, number> = new Map();
    dailyTotalTypes: Map<DailyTotalTypes, number> = new Map();
}
