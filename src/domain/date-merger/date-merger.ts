import * as moment from 'moment';
import { DateRange, MomentRange } from './shared';

export class DateMerger {
  public static merge(dateRanges: DateRange[]): DateRange[] {
    const momentRanges = dateRanges
      .map((range: DateRange) => ({
        ...range,
        start: moment(range.start),
        end: moment(range.end),
      }))
      .sort(sortCb);

    return this.compareAndSort(momentRanges).map(
      (momentRange: MomentRange) => ({
        ...momentRange,
        start: momentRange.start.toDate(),
        end: momentRange.end.toDate(),
      }),
    );
  }

  private static compareAndSort(dateRanges: MomentRange[]): MomentRange[] {
    if (dateRanges.length <= 1) {
      return dateRanges;
    }

    const [range1, range2] = dateRanges.slice(0, 2);

    if (this.isRangeBefore(range1, range2)) {
      return [range1, ...this.compareAndSort(dateRanges.slice(1))];
    }

    const { start: start1, end: end1 } = range1;
    const { start: start2, end: end2 } = range2;

    if (this.isStartBeforeAndEndInMiddle(range1, range2)) {
      return [
        { ...range1, start: start1, end: start2.clone().subtract(1, 'day') },
        ...this.compareAndSort(dateRanges.slice(1)),
      ];
    }

    if (this.isStartBeforeAndEndAfter(range1, range2)) {
      const rangesLeft = [
        { ...range1, start: end2.clone().add(1, 'day'), end: end1 },
        ...dateRanges.slice(1),
      ].sort(sortCb);

      return [
        { ...range1, start: start1, end: start2.clone().subtract(1, 'day') },
        ...this.compareAndSort(rangesLeft),
      ];
    }

    if (this.isStartInMiddleAndEndInMiddle(range1, range2)) {
      const rangesLeft = [
        { ...range2, start: end1.clone().add(1, 'day'), end: end2 },
        ...dateRanges.slice(2),
      ];

      return [range1, ...this.compareAndSort(rangesLeft)];
    }

    return dateRanges;
  }

  private static isRangeBefore(
    { start: start1, end: end1 }: MomentRange,
    { start: start2 }: MomentRange,
  ) {
    return start1.isBefore(start2) && end1.isSameOrBefore(start2);
  }

  private static isStartBeforeAndEndInMiddle(
    { start: start1, end: end1 }: MomentRange,
    { start: start2, end: end2 }: MomentRange,
  ) {
    return (
      start1.isBefore(start2) && end1.isBetween(start2, end2, undefined, '(]')
    );
  }

  private static isStartInMiddleAndEndInMiddle(
    { start: start1, end: end1 }: MomentRange,
    { start: start2, end: end2 }: MomentRange,
  ) {
    return (
      start1.isBetween(start2, end2, undefined, '[]') &&
      end1.isBetween(start2, end2, undefined, '[]')
    );
  }

  private static isStartBeforeAndEndAfter(
    { start: start1, end: end1 }: MomentRange,
    { start: start2, end: end2 }: MomentRange,
  ) {
    return start1.isBefore(start2) && end1.isAfter(end2);
  }
}

function sortCb(
  { start: a, end: a2 }: MomentRange,
  { start: b, end: b2 }: MomentRange,
): number {
  if (a.isBefore(b)) {
    return -1;
  }

  if (a.isAfter(b)) {
    return 1;
  }

  return a.isSame(b) && a2.isBefore(b2) ? -1 : 1;
}
