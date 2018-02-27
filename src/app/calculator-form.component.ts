import { Component, EventEmitter }    from '@angular/core';

import { CalculatorService }  from './calculator.service';
import { ExpensesCurrent }    from './expenses-current';
import { ExpensesOngoing }    from './expenses-ongoing';


@Component({
  selector: 'calculator-form',
  templateUrl: './calculator-form.component.html',
  providers: [CalculatorService]
})
export class CalculatorFormComponent {

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
      current: new ExpensesCurrent(1600, 400, 750, 600), 
      ongoing: new ExpensesOngoing(50, 470)
    },
    income: 5000,
    flightDate: Date.now()
  }

  tripExpensesSum: number;
  submitted = false;

  onDateChange(inputVal: string) {
    let date = inputVal;
    this.model.flightDate = Date.parse(date);
  }

  onSubmit() { 
    this.submitted = true;
    this.dailyBurnCurrent = this.calc.getDailyBurnCurrent(this.model.expenses.current);
    this.dailyBurnOngoing = this.calc.getDailyBurnOngoing(this.model.expenses.ongoing);
    this.dailyIncome = this.calc.getDailyIncome(this.model.income);
    this.daysToTrip = this.calc.getDaysTillTrip(this.model.flightDate);
    this.moneyForTrip = this.calc.calculateMoneyForTrip(this.dailyBurnCurrent, this.dailyBurnOngoing, this.dailyIncome, this.daysToTrip);

    this.calc.income = this.model.income;
    console.log(this.calc.calculateTripExpensesSum2());
  }

  onIncomeInput(val: number) {
    val = Number(val);

    console.log("income changed to "+ val);

    this.calc.income = val;
  }

  onTripExpenseInput(expense: string, val: number) {
    val = Number(val);
    console.log(expense + " changed to " + val);
    this.calc.addTripExpense(expense, val);
  }
}
