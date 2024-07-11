import { DateMerger } from 'src/domain/date-merger/date-merger';
import { DataDateRange } from 'src/domain/date-merger/shared';
import { IStay } from '../schemas/stay.schema';

export class StaysDateMergerAdapter {
  public static merge(stays: IStay[]): IStay[] {
    const dateRanges: DataDateRange<IStay>[] = stays.map((stay) => ({
      start: stay.start,
      end: stay.end,
      data: stay,
    }));

    const result = DateMerger.merge(dateRanges) as DataDateRange<IStay>[];

    const mergedByDatesStays: IStay[] = result.map((dataDateRange) => ({
      ...dataDateRange.data,
      start: dataDateRange.start,
      end: dataDateRange.end,
    }));

    return mergedByDatesStays;
  }
}
