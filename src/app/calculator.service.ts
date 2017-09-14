import { Rate }             from './rate-enum';
import { ExpensesCurrent }  from './expenses-current';
import { ExpensesOngoing }  from './expenses-ongoing';
import { ExpensesTrip }     from './expenses-trip';

const DAYS_PER_MONTH = 30; //in the future this should come from selection on component
const MS_PER_DAY = 86400000;

export class CalculatorService {
  private _expensesCurrent: Map<string, number>;
  private _expensesOngoing: Map<string, number>;
  private _expensesTrip: Map<string, number>;
  private _income: number;
  private _flightDate: Date;

  public getDailyBurnCurrent (currentExpenses: ExpensesCurrent) {
    let currentExpensesSum = currentExpenses.sum;

    return currentExpensesSum / DAYS_PER_MONTH;
  }

  public getDailyBurnOngoing (ongoingExpeses: ExpensesOngoing) {
    let ongoingExpensesSum = ongoingExpeses.total;

    return ongoingExpensesSum / DAYS_PER_MONTH;
  }
  
  public getDailyIncome (income: number) {
    let dailyIncome = income / DAYS_PER_MONTH
    return dailyIncome;
  }

  public getDaysTillTrip (tripDate: number) {
    let diffMilli = tripDate - Date.now();

    return Math.floor(diffMilli / MS_PER_DAY);
  }

  public calculateTripExpensesSum (expensesTrip: ExpensesTrip) {
    let sum = expensesTrip.total;
    return sum;
  }

  public calculateCurrentExpensesSum(expensesCurrent: ExpensesCurrent) {
    let sum = expensesCurrent.sum;
    return sum;
  }

  public calculateMoneyForTrip (burnRateCurrent, burnRateOngoing, dailyIncome, daysToTrip) {
    let expenseRate = burnRateCurrent + burnRateOngoing;
    let burnRateNet = dailyIncome - expenseRate;
    
    return burnRateNet * daysToTrip;
  }

  public addCurrentExpense(expense: string, val: number) {
    this._expensesCurrent.set(expense, val);
  }

  public addOngoingExpense(expense: string, val: number) {
    this._expensesOngoing.set(expense, val);
  }

  public addTripExpense(expense: string, val: number) {
    this._expensesTrip.set(expense, val);
  }

  public set income(val: number) {
    this._income = val;
  }

  public set flightDate(date: Date) {
    this._flightDate = date;
  }
}
