
export class DailyTotalItem {

    public amount: string;
    public get value(): number {

        let value: number = Number(this.amount);
        if (Number.isNaN(value))
        {
            return 0;
        }

        return value;
    }

    constructor(public title: string, amount: number, decimalPlaces: number) {
       this.amount = amount.toFixed(decimalPlaces);
    }
}
