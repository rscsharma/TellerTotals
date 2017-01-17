import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { CurrencyItem } from './currency-item';
import { DailyTotalItem } from './daily-total-item';
import { TellerTotalsService } from '../services/teller-totals.service';
import { TellerTotalsServiceResult } from '../services/teller-totals-service-result';
import { CurrencyTypes } from '../services/currency-types.enum';
import { DailyTotalTypes } from '../services/daily-total-types.enum';

//declare var moment: any;  // make ts happy

@Component({
  selector: 'app-teller-totals',
  templateUrl: './teller-totals.component.html',
  styleUrls: ['./teller-totals.component.css'],
  providers: [ TellerTotalsService ]
})
export class TellerTotalsComponent implements OnInit {

  title: string = "Teller Totals";
  showDatePicker: boolean = false;
  dateValue: Date = new Date();
  get dateValueString(): string {
    return moment(this.dateValue).format('MM/DD/YYYY');
  }
  set dateValueString(dateValueString: string) {

    // should do this check only when the enter key or tab is pressed
    if (moment(dateValueString, 'MM/DD/YYYY').isValid())
    {
      this.dateValue = new Date(dateValueString);
    }
  }
  currencyItems: CurrencyItem[];
  dailyTotalItems: DailyTotalItem[];
  get totalAmount(): number {

    let total: number = 0;

    for (let currencyItem of this.currencyItems)
    {
      total += currencyItem.amount;
    }

    for (let dailyTotalItem of this.dailyTotalItems)
    {
      total += dailyTotalItem.value;
    }

    return total;
  }

  constructor(private tellerTotalsService: TellerTotalsService) {
  }

  onSubmit() {
    
  }

  ngOnInit() {

    let currencyTypes: CurrencyTypes[] = [
      CurrencyTypes.Hundreds,
      CurrencyTypes.Fifties,
      CurrencyTypes.Twenties,
      CurrencyTypes.Tens,
      CurrencyTypes.Fives,
      CurrencyTypes.Twos,
      CurrencyTypes.Ones,
      ];

    let dailyTotalTypes: DailyTotalTypes[] = [
      DailyTotalTypes.EndingCash,
      DailyTotalTypes.ChecksReceived,
      DailyTotalTypes.MoneyOrders,
      DailyTotalTypes.TravelersChecks,
      DailyTotalTypes.ChecksDisbursed,
      DailyTotalTypes.SecondaryChecks,
      DailyTotalTypes.BondClearing,
      DailyTotalTypes.BeginingForeign,
      DailyTotalTypes.EndingForeign
    ];

    let result: TellerTotalsServiceResult = this.tellerTotalsService.getTotals();

    this.currencyItems = [];
    this.dailyTotalItems = [];

    for (var currencyType of currencyTypes) {
      this.currencyItems.push(new CurrencyItem(currencyType, result.currencyTypes.get(currencyType)));
    }

    for (var dailyTotalType of dailyTotalTypes) {
      this.dailyTotalItems.push(new DailyTotalItem(dailyTotalType, result.dailyTotalTypes.get(dailyTotalType), 2));
    }
  }
}
