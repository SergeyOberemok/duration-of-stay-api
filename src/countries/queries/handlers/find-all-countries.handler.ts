import { QueryHandler } from '@nestjs/cqrs';
import { Country } from 'src/countries/model/schemas';
import { CountriesQueryRepository } from 'src/countries/repositories/countries-query.repository';
import { FindAllCountriesQuery } from '../actions';

@QueryHandler(FindAllCountriesQuery)
export class FindAllCountriesHandler {
  constructor(private countriesQueryRepository: CountriesQueryRepository) {}

  public async execute(query: FindAllCountriesQuery): Promise<Country[]> {
    return this.countriesQueryRepository.findAll();
  }
}
