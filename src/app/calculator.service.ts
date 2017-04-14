import { ExpensesTrip } from './expenses-trip';
import { ExpensesCurrent } from './expenses-current';
import { ExpensesOngoing } from './expenses-ongoing';
import { Rate } from './rate-enum';

export class CalculatorService {
  private moneyForTrip: number;

  public getTripExpenses (tripExpenses: ExpensesTrip) {
    let tripExpensesSum = tripExpenses.total;
    return tripExpensesSum;
  }

  public getDailyBurn (currentExpenses: ExpensesCurrent) {
    let burnRate = 30; //in the future this should come from selection on component
    let currentExpensesSum = currentExpenses.total / burnRate;
    
    return currentExpensesSum;
  }
  
}
