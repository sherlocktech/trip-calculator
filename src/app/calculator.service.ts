import { Injectable } from '@angular/core';
import { Trip } from 'app/trip';
import { Result } from 'app/result';
import { Moment } from 'moment';
import * as moment from 'moment';

@Injectable()
export class CalculatorService {

  calculateResults(trip: Trip): Result {
    const result = new Result();
    const savings = this.calculateSavings(trip);
    const diff = trip.cost - savings;

    result.savingsAdequate = diff <= 0;
    result.savingsForTrip = savings;
    result.savingsDiff = diff;

    return result;
  }

  private calculateSavings(trip: Trip) {
    const now = moment();
    const m = moment.duration(trip.date.diff(now)).asMonths();
    const sr = isNaN(trip.savingsRate) ? 0 : trip.savingsRate;
    const s = isNaN(trip.baseSavings) ? 0 : trip.baseSavings;
    return (m * sr) + s;
  }
}
