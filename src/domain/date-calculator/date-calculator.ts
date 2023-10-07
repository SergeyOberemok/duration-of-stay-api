import * as moment from 'moment';
import { YearsMonthsDays } from './shared';

export class DateCalculator {
  static getDuration(startDate: Date, endDate?: Date): moment.Duration {
    const start = moment(startDate);
    const end = moment(endDate);
    const diff = end.diff(start);

    return moment.duration(diff);
  }

  static getDaysDuration(startDate: Date, endDate?: Date): number {
    return DateCalculator.getDuration(startDate, endDate).asDays();
  }

  static getYearsDuration(startDate: Date, endDate?: Date): number {
    return DateCalculator.getDuration(startDate, endDate).asYears();
  }

  static getYearsMonthsDaysDuration(
    startDate: Date,
    endDate?: Date,
  ): YearsMonthsDays {
    const duration = DateCalculator.getDuration(startDate, endDate);

    return {
      years: duration.years(),
      months: duration.months(),
      days: duration.days(),
    };
  }
}
