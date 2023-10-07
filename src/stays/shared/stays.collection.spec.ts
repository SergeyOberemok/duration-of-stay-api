import { Stay } from '../schemas/stay.schema';
import { StaysCollection } from './stays.collection';

describe('StaysCollection', () => {
  it('should create an instance', () => {
    const stays = new StaysCollection();

    expect(stays.length).toBe(0);
  });

  it('should create an instance from an array', () => {
    const stay = new Stay();
    const stays = StaysCollection.from([stay]);

    expect(stays.length).toBe(1);
    expect(stays[0]).toBe(stay);
  });
});
