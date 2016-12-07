import { DailyTotalTypes } from '../services/daily-total-types.enum';

export class DailyTotalItem {

    private static descriptions: Map<DailyTotalTypes, string> = new Map(
        [
            [ DailyTotalTypes.EndingCash, "Ending Cash"],
            [ DailyTotalTypes.ChecksReceived, "Checks Received"],
            [ DailyTotalTypes.MoneyOrders, "Money Orders"],
            [ DailyTotalTypes.TravelersChecks, "Travelers Checks"],
            [ DailyTotalTypes.ChecksDisbursed, "Checks Disbursed"],
            [ DailyTotalTypes.SecondaryChecks, "Secondary Checks"],
            [ DailyTotalTypes.BondClearing, "Bond Clearing"],
            [ DailyTotalTypes.BeginingForeign, "Begining Foreign"],
            [ DailyTotalTypes.EndingForeign, "Ending Foreign"],
        ]);

    public readonly dailyTotalType: DailyTotalTypes;
    public readonly amount: string;

    get title(): string {
        return DailyTotalItem.descriptions.get(this.dailyTotalType);
    }

    constructor(dailyTotalType: DailyTotalTypes, amount: number, decimalPlaces: number) {
        this.dailyTotalType = dailyTotalType;
        this.amount = amount.toFixed(decimalPlaces);
    }
}
