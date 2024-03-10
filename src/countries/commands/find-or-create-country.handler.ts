import { CommandHandler } from '@nestjs/cqrs';
import { CountriesCommandRepository } from '../repositories/countries-command.repository';
import { CountriesQueryRepository } from '../repositories/countries-query.repository';
import { Country } from '../schemas/country.schema';
import { FindOrCreateCountryCommand } from './find-or-create-country.command';

@CommandHandler(FindOrCreateCountryCommand)
export class FindOrCreateCountryHandler {
  constructor(
    private readonly countriesCommandRepository: CountriesCommandRepository,
    private readonly countriesQueryRepository: CountriesQueryRepository,
  ) {}

  async execute({
    country: { name },
  }: FindOrCreateCountryCommand): Promise<Country> {
    const foundCountry = await this.countriesQueryRepository.findOne({ name });

    if (foundCountry) {
      return foundCountry;
    }

    return this.countriesCommandRepository.persist({ name });
  }
}
