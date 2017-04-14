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
totalCurrent: number;

currentExpensesRate: string;

// rates = [30, 7, 1]; // need to come up with a good solution for choosing rates

  constructor(private calc: CalculatorService) {}
  model = {
    expenses: {
      trip: new ExpensesTrip(),
      current: new ExpensesCurrent(), 
      ongoing: new ExpensesOngoing()
    },
    income: new Income(5000)
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    this.totalTrip = this.calc.getTripExpenses(this.model.expenses.trip);
    this.totalCurrent = this.calc.getDailyBurn(this.model.expenses.current);
   }

  //TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
