import { ExpensesTrip }     from './expenses-trip';
import { ExpensesCurrent }  from './expenses-current';
import { ExpensesOngoing }  from './expenses-ongoing';
import { Income }           from './income';
import { Rate }             from './rate-enum';

const DAYS_PER_MONTH = 30; //in the future this should come from selection on component
const MS_PER_DAY = 86400000;

export class CalculatorService {
  private daysTillTrip: number;
  private burnRateCurrent: number;
  private burnRateOngoing: number;
  private dailyIncome: number;
  private moneyForTrip: number;

  public getTripExpenses (tripExpenses: ExpensesTrip) {
    let tripExpensesSum = tripExpenses.total;
    return tripExpensesSum;
  }

  public getDailyBurnCurrent (currentExpenses: ExpensesCurrent) {
    let currentExpensesSum = currentExpenses.total;

    this.burnRateCurrent = currentExpensesSum  / DAYS_PER_MONTH;
    
    return this.burnRateCurrent;
  }

  public getDailyBurnOngoing (ongoingExpeses: ExpensesOngoing) {
    let ongoingExpensesSum = ongoingExpeses.total;

    this.burnRateOngoing = ongoingExpensesSum / DAYS_PER_MONTH;

    return this.burnRateOngoing;
  }
  
  public getDailyIncome (income: Income) {
    this.dailyIncome = income.income / DAYS_PER_MONTH
    return this.dailyIncome;
  }

  public getDaysTillTrip (tripDate: number) {
    let diffMilli = tripDate - Date.now();

    this.daysTillTrip = Math.floor(diffMilli / MS_PER_DAY);
    return this.daysTillTrip;
  }

  public getMoneyForTrip () {
    let expenseRate = this.burnRateCurrent + this.burnRateOngoing;
    let burnRateNet = this.dailyIncome - expenseRate;
    
    this.moneyForTrip = burnRateNet * this.daysTillTrip;

    return this.moneyForTrip;
  }
}
