import { DateMerger } from './date-merger';
import { DateRange } from './shared';

describe('data-merger', () => {
  it('ranges stay the same', () => {
    const dates: DateRange[] = [
      { start: new Date('2024-06-02'), end: new Date('2024-06-03') },
      { start: new Date('2024-06-04'), end: new Date('2024-06-06') },
    ];

    const result: DateRange[] = DateMerger.merge(dates);

    expect(result).toEqual(dates);
  });

  it('first range shortens and stays first', () => {
    const dates: DateRange[] = [
      { start: new Date('2024-06-02'), end: new Date('2024-06-05') },
      { start: new Date('2024-06-04'), end: new Date('2024-06-06') },
    ];

    const result: DateRange[] = DateMerger.merge(dates);

    expect(result).toEqual([
      { start: new Date('2024-06-02'), end: new Date('2024-06-03') },
      { start: new Date('2024-06-04'), end: new Date('2024-06-06') },
    ]);
  });

  it('first range shortens and becomes last', () => {
    const dates: DateRange[] = [
      { start: new Date('2024-06-04'), end: new Date('2024-06-06') },
      { start: new Date('2024-06-04'), end: new Date('2024-06-08') },
    ];

    const result: DateRange[] = DateMerger.merge(dates);

    expect(result).toEqual([
      { start: new Date('2024-06-04'), end: new Date('2024-06-06') },
      { start: new Date('2024-06-07'), end: new Date('2024-06-08') },
    ]);
  });

  it('first range divides and becomes first and last', () => {
    const dates: DateRange[] = [
      { start: new Date('2024-06-02'), end: new Date('2024-06-08') },
      { start: new Date('2024-06-04'), end: new Date('2024-06-06') },
    ];

    const result: DateRange[] = DateMerger.merge(dates);

    expect(result).toEqual([
      { start: new Date('2024-06-02'), end: new Date('2024-06-03') },
      { start: new Date('2024-06-04'), end: new Date('2024-06-06') },
      { start: new Date('2024-06-07'), end: new Date('2024-06-08') },
    ]);
  });
});
