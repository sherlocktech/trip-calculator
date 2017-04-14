import { Rate } from './rate-enum';

export class ExpensesCurrent {
  public rent: number;
  public utilities: number;
  public food: number;
  public fun: number;
  public rate: number;

  //possibly move all of this logic to calculator.service
  get total() {
    let sum = 0;
    sum += this.rent + this.utilities + this.food + this.fun;
    return sum;
  }
}
