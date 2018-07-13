import { TestBed, inject } from '@angular/core/testing';

import { DateAdapterService } from './date-adapter.service';

import * as moment from 'moment';

describe('DateAdapterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateAdapterService]
    });
  });

  it('should be created', inject([DateAdapterService], (service: DateAdapterService) => {
    expect(service).toBeTruthy();
  }));

  it('should convert dates', inject([DateAdapterService], (service: DateAdapterService) => {
    const date = moment();

    const actual = service.fromModel(moment());
    const expected = {year: date.year(), month: date.month() + 1, day: date.date()};

    expect(actual).toEqual(expected);
  }));
});
