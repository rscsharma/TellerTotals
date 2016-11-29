export class CurrencyItem {
    get amount(): number {
        return this.count * this.unitValue;
    }
    constructor(public title: string, public count: number, public unitValue: number) {

    }
}
