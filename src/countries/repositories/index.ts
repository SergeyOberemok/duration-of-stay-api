import { CountriesCommandRepository } from './countries-command.repository';
import { CountriesQueryRepository } from './countries-query.repository';

export const countryRepositories = [
  CountriesQueryRepository,
  CountriesCommandRepository,
];
