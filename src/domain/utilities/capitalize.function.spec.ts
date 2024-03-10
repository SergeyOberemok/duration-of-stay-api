import { faker } from '@faker-js/faker';
import { capitalize } from './capitalize.function';

describe('capitalize', () => {
  it('should capitalize the first letter of a word', () => {
    const word = faker.lorem.word();

    const result = capitalize(word);

    expect(result).not.toBe(word);
    expect(result.toLocaleLowerCase()).toBe(word.toLocaleLowerCase());
  });
});
