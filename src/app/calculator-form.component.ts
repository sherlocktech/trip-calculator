import { Component } from '@angular/core';

import { CalculatorService } from './calculator.service';

import { ExpensesTrip } from './expenses-trip';
import { ExpensesCurrent } from './expenses-current';
import { ExpensesOngoing } from './expenses-ongoing';
import { Income } from './income';

@Component({
  selector: 'calculator-form',
  templateUrl: './calculator-form.component.html',
  providers: [CalculatorService]
})
export class CalculatorFormComponent {
  constructor(private calc: CalculatorService) {}
  model = {
    expenses: {
      trip: new ExpensesTrip(500, 1000, 500, 200),
      current: new ExpensesCurrent(1600, 300, 700, 100), ongoing: new ExpensesOngoing(50, 164)
    },
    income: new Income(5000)
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  //TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
