

import { CurrencyTypes } from '../services/currency-types.enum';

export class CurrencyItem {
    public readonly currencyType: CurrencyTypes;
    public readonly count: number;

    get amountString(): string {
        return this.amount.toFixed(2);
    }
    get amount(): number {
        return this.count * this.currencyType / 100;      // currencyType value is the number of dollars in the note * 100
    }
    get title(): string {
        return CurrencyTypes[this.currencyType];    // return string representation
    }

    constructor(currencyType: CurrencyTypes, count: number) {
        this.currencyType = currencyType;
        this.count = count;
    }
}
