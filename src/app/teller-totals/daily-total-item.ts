
export class DailyTotalItem {

    public amount: string;

    constructor(public title: string, amount: number, decimalPlaces: number) {
       this.amount = amount.toFixed(decimalPlaces);
    }
}
