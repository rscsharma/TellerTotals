export class CurrencyItem {
    get amountString(): string {
        return this.amount.toFixed(2);
    }
    get amount(): number {
        return this.count * this.unitValue;
    }
    constructor(public title: string, public count: number, public unitValue: number) {

    }
}
