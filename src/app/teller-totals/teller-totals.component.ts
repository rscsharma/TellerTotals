import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teller-totals',
  templateUrl: './teller-totals.component.html',
  styleUrls: ['./teller-totals.component.css']
})
export class TellerTotalsComponent implements OnInit {

  dateValue: Date = new Date();
  showDatePicker: boolean = false;
  ones: number;
  twos: number;
  fives: number;
  tens: number;
  twenties:number;
  fifties: number;
  hundreds: number;

  get onesAmount(): number {
    return this.ones * 1;
  }

  get twosAmount(): number {
    return this.twos * 2;
  }

  get fivesAmount(): number {
    return this.fives * 5;
  }

  get tensAmount(): number {
    return this.tens * 10;
  }

  get twentiesAmount(): number {
    return this.twenties * 20;
  }

  get fiftiesAmount(): number {
    return this.fifties * 50;
  }

  get hundredsAmount(): number {
    return this.hundreds * 100;
  }

  get totalAmount(): number {
    return this.onesAmount +
      this.twosAmount +
      this.fivesAmount +
      this.tensAmount +
      this.twentiesAmount +
      this.fiftiesAmount +
      this.hundredsAmount;
  }
  constructor() { }

  ngOnInit() {
    this.ones = 5;
    this.twos = 5;
    this.fives = 2;
    this.tens = 0;
    this.twenties = 10;
    this.fifties = 10;
    this.hundreds = 18;
  }
}
