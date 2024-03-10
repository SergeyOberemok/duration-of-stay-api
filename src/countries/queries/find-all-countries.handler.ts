import { QueryHandler } from '@nestjs/cqrs';
import { CountriesQueryRepository } from 'src/countries/repositories/countries-query.repository';
import { Country } from 'src/countries/schemas/country.schema';
import { FindAllCountriesQuery } from './find-all-countries.query';

@QueryHandler(FindAllCountriesQuery)
export class FindAllCountriesHandler {
  constructor(
    private readonly countriesQueryRepository: CountriesQueryRepository,
  ) {}

  async execute({ payload: query }: FindAllCountriesQuery): Promise<Country[]> {
    return this.countriesQueryRepository.findAll(query);
  }
}
