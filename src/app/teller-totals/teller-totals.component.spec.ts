/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { TellerTotalsComponent } from './teller-totals.component';
import { CurrencyItem } from './currency-item';
import { DailyTotalItem } from './daily-total-item';
import { NumberInputDirective } from '../common/number-input.directive';
import { TellerTotalsService } from '../services/teller-totals.service';
import { TellerTotalsServiceResult } from '../services/teller-totals-service-result';
import { CurrencyTypes } from '../services/currency-types.enum';
import { DailyTotalTypes } from '../services/daily-total-types.enum';

describe('TellerTotalsComponent', () => {
  let component: TellerTotalsComponent;
  let fixture: ComponentFixture<TellerTotalsComponent>;
  let tellerTotalsServiceStub: TellerTotalsService;


  beforeEach(() => {

   // mock TellerTotalsService for test purposes
    tellerTotalsServiceStub =  {

      getTotals(): TellerTotalsServiceResult {

      let result: TellerTotalsServiceResult = new TellerTotalsServiceResult(); 

      result.currencyTypes.set(CurrencyTypes.Hundreds, 1);
      result.currencyTypes.set(CurrencyTypes.Fifties, 2);
      result.currencyTypes.set(CurrencyTypes.Twenties, 3);
      result.currencyTypes.set(CurrencyTypes.Tens, 4);
      result.currencyTypes.set(CurrencyTypes.Fives, 5);
      result.currencyTypes.set(CurrencyTypes.Twos, 6);
      result.currencyTypes.set(CurrencyTypes.Ones, 7);

      result.dailyTotalTypes.set(DailyTotalTypes.EndingCash, 10);
      result.dailyTotalTypes.set(DailyTotalTypes.ChecksReceived, 11);
      result.dailyTotalTypes.set(DailyTotalTypes.MoneyOrders, 12);
      result.dailyTotalTypes.set(DailyTotalTypes.TravelersChecks, 13);
      result.dailyTotalTypes.set(DailyTotalTypes.ChecksDisbursed, 14);
      result.dailyTotalTypes.set(DailyTotalTypes.SecondaryChecks, 15);
      result.dailyTotalTypes.set(DailyTotalTypes.BondClearing, 16);
      result.dailyTotalTypes.set(DailyTotalTypes.BeginingForeign, 17);
      result.dailyTotalTypes.set(DailyTotalTypes.EndingForeign, 18);

      return result;
    }
  };

  TestBed.configureTestingModule({
    declarations: [
      NumberInputDirective,
      TellerTotalsComponent,
      ],
      imports: [
        FormsModule
      ]
    });

    // provider for TellerTransactionService is specified in the component,
    // not the module so we do this to set the component's provider to use
    // tellerTotalsServiceStub

    TestBed.overrideComponent(TellerTotalsComponent, {
      set: {
       providers: [ {provide: TellerTotalsService, useValue: tellerTotalsServiceStub } ]
      }
    });

    fixture = TestBed.createComponent(TellerTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    // query for the title <h3> by CSS element selector

    let debugElement: DebugElement = fixture.debugElement.query(By.css('h3'));
    expect(debugElement.nativeElement.textContent).toContain(component.title);
  });

  it('should have the currencyItems with counts set from service', () => {

    // TellerTotalsService actually injected into the component
    let tellerTotalsService: TellerTotalsService = fixture.debugElement.injector.get(TellerTotalsService);

    let tellerTotalsServiceResult: TellerTotalsServiceResult = tellerTotalsService.getTotals();

    expect(component.currencyItems.length).toBe(tellerTotalsServiceResult.currencyTypes.size);

    for (let currencyItem of component.currencyItems) {
      expect(currencyItem.count).toBe(tellerTotalsServiceResult.currencyTypes.get(currencyItem.currencyType));
    }
  });

  it('should have the dailyTotalItems with amounts set from service', () => {

    // TellerTotalsService actually injected into the component
    let tellerTotalsService: TellerTotalsService = fixture.debugElement.injector.get(TellerTotalsService);

    let tellerTotalsServiceResult: TellerTotalsServiceResult = tellerTotalsService.getTotals();

    for (let dailyItem of component.dailyTotalItems) {
      expect(dailyItem.amount).toBe(tellerTotalsServiceResult.dailyTotalTypes.get(dailyItem.dailyTotalType).toFixed(2));
    }
  });

  it ('its template should display a currencyTable with the component\'s currencyItems', () => {
      var table = fixture.debugElement.query(By.css('#currencyTable'));
      var rows = table.queryAll(By.css('tr'));

      expect(rows.length).toBe(component.currencyItems.length + 1); // 1 for header


      let rowIndex: number = 0;
      for (let td of rows)
      {
        if (rowIndex == 0)
        {
          var columnHeaders = td.queryAll(By.css('th'));
          expect(columnHeaders.length).toBe(3);
          expect(columnHeaders[0].nativeElement.textContent).toBe('Currency Type');
          expect(columnHeaders[1].nativeElement.textContent).toBe('Count');
          expect(columnHeaders[2].nativeElement.textContent).toBe('Amount');
        }
        else
        {
          var dataColumns = td.queryAll(By.css('td'));

          expect(dataColumns.length).toBe(3);

          var inputs = dataColumns[1].queryAll(By.css('input'));         // second column contains input
          expect(inputs.length).toBe(1);

          // offset rowIndex by 1 to get array index in component to compensate for table header row
          expect(dataColumns[0].nativeElement.textContent).toBe(component.currencyItems[rowIndex - 1].title);

          // this doesn't work.  value is always ''
//          expect(inputs[0].nativeElement.textContent).toBe(component.currencyItems[rowIndex - 1].count.toString()); 
          expect(dataColumns[2].nativeElement.textContent).toBe(component.currencyItems[rowIndex - 1].amountString);
        }
        rowIndex++;
      }
  });

});
