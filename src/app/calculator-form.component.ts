import { Component } from '@angular/core';

import { CalculatorService } from './calculator.service';

import { ExpensesTrip } from './expenses-trip';
import { ExpensesCurrent } from './expenses-current';
import { ExpensesOngoing } from './expenses-ongoing';
import { Income } from './income';

import { Rate } from './rate-enum';

@Component({
  selector: 'calculator-form',
  templateUrl: './calculator-form.component.html',
  providers: [CalculatorService]
})
export class CalculatorFormComponent {

totalTrip: number;
dailyBurnCurrent: number;
dailyBurnOngoing: number;
dailyIncome: number;
daysToTrip: number;
moneyForTrip: number;

currentExpensesRate: string;

// rates = [30, 7, 1]; // need to come up with a good solution for choosing rates

  constructor(private calc: CalculatorService) {}
  model = {
    expenses: {
      trip: new ExpensesTrip(500, 250, 200, 200),
      current: new ExpensesCurrent(1600, 400, 750, 600), 
      ongoing: new ExpensesOngoing(50, 470)
    },
    income: new Income(5000)
  }

  submitted = false;

  onDateChange(inputVal: string) {
    let date = inputVal;
    this.model.expenses.trip.flightDate = Date.parse(date);
  }

  onSubmit() { 
    this.submitted = true;
    this.totalTrip = this.calc.getTripExpenses(this.model.expenses.trip);
    this.dailyBurnCurrent = this.calc.getDailyBurnCurrent(this.model.expenses.current);
    this.dailyBurnOngoing = this.calc.getDailyBurnOngoing(this.model.expenses.ongoing);
    this.dailyIncome = this.calc.getDailyIncome(this.model.income);
    this.daysToTrip = this.calc.getDaysTillTrip(this.model.expenses.trip.flightDate);
    this.moneyForTrip = this.calc.getMoneyForTrip();
   }

  //TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
