import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Moment } from 'moment';
import * as moment from 'moment';

@Injectable()
export class DateAdapterService extends NgbDateAdapter<Moment> {

  fromModel(date: Moment): NgbDateStruct {
    return (date && date.year) ? {year: date.year(), month: date.month() + 1, day: date.date()} : null;
  }

  toModel(date: NgbDateStruct): Moment {
    return date ? moment(new Date(date.year, date.month - 1, date.day)) : null;
  }

}
