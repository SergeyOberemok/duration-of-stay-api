import * as moment from 'moment';
import { YearsMonthsDays } from './shared';

export class DateCalculator {
  public static getDuration(start: Date, end?: Date): moment.Duration {
    const startDate = moment(start);
    const endDate = moment(end);

    if (startDate.isSame(end)) {
      return moment.duration(1, 'day');
    }

    // startDate.startOf('day');
    // endDate.endOf('day');

    const difference = endDate.diff(startDate);

    return moment.duration(difference);
  }

  public static getDaysDuration(start: Date, end?: Date): number {
    const days = this.getDuration(start, end).asDays();
    return Math.round(days);
  }

  public static getYearsDuration(start: Date, end?: Date): number {
    return this.getDuration(start, end).asYears();
  }

  public static getYearsMonthsDaysDuration(
    start: Date,
    end?: Date,
  ): YearsMonthsDays {
    const duration = this.getDuration(start, end);

    return {
      years: duration.years(),
      months: duration.months(),
      days: duration.days(),
    };
  }
}
