import { Moment } from 'moment';
import * as moment from 'moment';

export class Trip {
  cost: number;
  savingsRate: number;
  baseSavings: number;
  date: Moment;

  get savings(): number {
    const now = moment();
    const m = moment.duration(this.date.diff(now)).asMonths();
    const sr = isNaN(this.savingsRate) ? 0 : this.savingsRate;
    const s = isNaN(this.baseSavings) ? 0 : this.baseSavings;
    return (m * sr) + s;
  }

  get savingsAdequate(): boolean {
    return this.savings >= this.cost;
  }
}
