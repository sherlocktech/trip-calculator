import { Rate }             from './rate-enum';
import { ExpensesCurrent }  from './expenses-current';
import { ExpensesOngoing }  from './expenses-ongoing';
import { ExpensesTrip }     from './expenses-trip';

const DAYS_PER_MONTH = 30; //in the future this should come from selection on component
const MS_PER_DAY = 86400000;

export class CalculatorService {
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
}
