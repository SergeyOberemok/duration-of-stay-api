import { CreateCountryHandler } from './create-country.handler';
import { FindOrCreateCountryHandler } from './find-or-create-country.handler';

export const countriesCommandHandlers = [
  CreateCountryHandler,
  FindOrCreateCountryHandler,
];
