import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CountriesCommandRepository } from '../repositories/countries-command.repository';
import { CountriesQueryRepository } from '../repositories/countries-query.repository';
import { Country } from '../schemas/country.schema';
import { FindOrCreateCountryCommand } from './find-or-create-country.command';

@CommandHandler(FindOrCreateCountryCommand)
export class FindOrCreateCountryHandler
  implements ICommandHandler<FindOrCreateCountryCommand>
{
  constructor(
    private readonly countriesCommandRepository: CountriesCommandRepository,
    private readonly countriesQueryRepository: CountriesQueryRepository,
  ) {}

  execute({ country: { name } }: FindOrCreateCountryCommand): Promise<Country> {
    return this.countriesQueryRepository.findOne({ name }).then((country) => {
      if (country) {
        return country;
      }

      return this.countriesCommandRepository.persist({ name });
    });
  }
}
