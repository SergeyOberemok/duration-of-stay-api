import { DateCalculator } from 'src/domain/date-calculator/date-calculator';
import { Stay } from '../schemas/stay.schema';

export class StaysCollection extends Array<Stay> {
  public static from(stays: Stay[]): StaysCollection {
    return Object.assign(new StaysCollection(), stays);
  }

  public getDaysDuration(): number {
    const days = this.reduce(
      (acc, stay: Stay) =>
        acc + DateCalculator.getDaysDuration(stay.start, stay.end),
      0,
    );

    return Math.floor(days);
  }
}
