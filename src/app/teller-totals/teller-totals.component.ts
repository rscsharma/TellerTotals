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

  ngOnInit() {

    let result: TellerTotalsServiceResult = this.tellerTotalsService.getTotals();

    this.currencyItems = [];
    this.currencyItems.push(new CurrencyItem("Hundreds", result.currencyTypes.get(CurrencyTypes.Hundreds), 100));
    this.currencyItems.push(new CurrencyItem("Fifties", result.currencyTypes.get(CurrencyTypes.Fifties), 50));
    this.currencyItems.push(new CurrencyItem("Twenties", result.currencyTypes.get(CurrencyTypes.Twenties), 20));
    this.currencyItems.push(new CurrencyItem("Tens", result.currencyTypes.get(CurrencyTypes.Tens), 10));
    this.currencyItems.push(new CurrencyItem("Fives", result.currencyTypes.get(CurrencyTypes.Fives), 5));
    this.currencyItems.push(new CurrencyItem("Twos", result.currencyTypes.get(CurrencyTypes.Twos), 2));
    this.currencyItems.push(new CurrencyItem("Ones", result.currencyTypes.get(CurrencyTypes.Ones), 1));

    this.dailyTotalItems = [];
    this.dailyTotalItems.push(new DailyTotalItem("Ending Cash", result.dailyTotalTypes.get(DailyTotalTypes.EndingCash), 2));
    this.dailyTotalItems.push(new DailyTotalItem("Checks Received", result.dailyTotalTypes.get(DailyTotalTypes.ChecksReceived), 2));
    this.dailyTotalItems.push(new DailyTotalItem("Money Orders", result.dailyTotalTypes.get(DailyTotalTypes.MoneyOrders), 2));
    this.dailyTotalItems.push(new DailyTotalItem("Traveler's Checks", result.dailyTotalTypes.get(DailyTotalTypes.TravelersChecks), 2));
    this.dailyTotalItems.push(new DailyTotalItem("Checks Disbursed", result.dailyTotalTypes.get(DailyTotalTypes.ChecksDisbursed), 2));
    this.dailyTotalItems.push(new DailyTotalItem("Secondary Checks", result.dailyTotalTypes.get(DailyTotalTypes.SecondaryChecks), 2));
    this.dailyTotalItems.push(new DailyTotalItem("Bond Clearing", result.dailyTotalTypes.get(DailyTotalTypes.BondClearing), 2));
    this.dailyTotalItems.push(new DailyTotalItem("Begining Foreign", result.dailyTotalTypes.get(DailyTotalTypes.BeginingForeign), 2));
    this.dailyTotalItems.push(new DailyTotalItem("Ending Foreign", result.dailyTotalTypes.get(DailyTotalTypes.EndingForeign), 2));
  }
}
