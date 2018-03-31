import { Moment } from 'moment';
import * as moment from 'moment';

export class Trip {
  cost: number;
  savingsRate: number;
  date: Moment;
  private _savings: number;

  get savings(): number {
    const now = moment();
    const m = moment.duration(this.date.diff(now)).asMonths();
    const sr = isNaN(this.savingsRate) ? 0 : this.savingsRate;
    return m * sr;
  }
}
