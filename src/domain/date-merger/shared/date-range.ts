import { Moment } from 'moment';

export interface DateRange {
  start: Date;
  end: Date;
}

export interface DataDateRange<T> extends DateRange {
  data: T;
}

export interface MomentRange {
  start: Moment;
  end: Moment;
}
