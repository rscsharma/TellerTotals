import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { CurrencyItem } from './currency-item';
import { DailyTotalItem } from './daily-total-item';

//declare var moment: any;  // make ts happy

@Component({
  selector: 'app-teller-totals',
  templateUrl: './teller-totals.component.html',
  styleUrls: ['./teller-totals.component.css']
})
export class TellerTotalsComponent implements OnInit {

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
      total += dailyTotalItem.amount;
    }

    return total;
  }
  constructor() {
    
  }
  ngOnInit() {

    this.currencyItems = [];
    this.currencyItems.push(new CurrencyItem("Hundreds", 18, 100));
    this.currencyItems.push(new CurrencyItem("Fifties", 10, 50));
    this.currencyItems.push(new CurrencyItem("Twenties", 10, 20));
    this.currencyItems.push(new CurrencyItem("Tens", 10, 20));
    this.currencyItems.push(new CurrencyItem("Fives", 2, 10));
    this.currencyItems.push(new CurrencyItem("Twos", 4, 2));
    this.currencyItems.push(new CurrencyItem("Ones", 27, 1));

    this.dailyTotalItems = [];
    this.dailyTotalItems.push(new DailyTotalItem("Ending Cash", 6554.54));
    this.dailyTotalItems.push(new DailyTotalItem("Checks Received", 46817.17));
    this.dailyTotalItems.push(new DailyTotalItem("Money Orders", 100.00));
    this.dailyTotalItems.push(new DailyTotalItem("Traveler's Checks", 50));
    this.dailyTotalItems.push(new DailyTotalItem("Checks Disbursed", 200.00));
    this.dailyTotalItems.push(new DailyTotalItem("Secondary Checks", 0));
    this.dailyTotalItems.push(new DailyTotalItem("Bond Clearing", 25));
    this.dailyTotalItems.push(new DailyTotalItem("Begining Foreign", 55.50));
    this.dailyTotalItems.push(new DailyTotalItem("Ending Foreign", 45.50));
  }
}
