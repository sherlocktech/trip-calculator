import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { Trip } from './trip';
import * as moment from 'moment';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
    service = TestBed.get(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate results', () => {
    const trip = new Trip();
    trip.baseSavings = 50;
    trip.cost = 50;
    trip.date = moment().add(1, 'month');
    trip.savingsRate = 1;

    const result = service.calculateResults(trip);

    expect(result.savingsAdequate).toBe(true);
  })
});
