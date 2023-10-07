import { faker } from '@faker-js/faker';
import { DateCalculator } from './date-calculator';

describe('date-calculator', () => {
  describe('duration', () => {
    it('days till now', () => {
      const startDate = faker.date.past();

      const days = DateCalculator.getDaysDuration(startDate);

      expect(days).toBeGreaterThan(0);
    });

    it('days between two dates', () => {
      const startDate = faker.date.past();
      const endDate = faker.date.future();

      const days = DateCalculator.getDaysDuration(startDate, endDate);

      expect(days).toBeGreaterThan(0);
    });

    it('years till now', () => {
      const startDate = faker.date.past({ years: 10, refDate: '2000-01-01' });

      const years = DateCalculator.getYearsDuration(startDate);

      expect(years).toBeGreaterThan(0);
    });

    it('years between two dates', () => {
      const startDate = faker.date.past({ years: 10 });
      const endDate = faker.date.future({ years: 10 });

      const years = DateCalculator.getYearsDuration(startDate, endDate);

      expect(years).toBeGreaterThan(0);
    });
  });
});
