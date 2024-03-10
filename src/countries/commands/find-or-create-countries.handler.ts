import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { uniqBy } from 'lodash';
import {
  CountriesCommandRepository,
  CountriesQueryRepository,
} from '../repositories';
import { Country } from '../schemas/country.schema';
import { FindOrCreateCountriesCommand } from './find-or-create-countries.command';

@CommandHandler(FindOrCreateCountriesCommand)
export class FindOrCreateCountriesHandler
  implements ICommandHandler<FindOrCreateCountriesCommand>
{
  constructor(
    private readonly countriesCommandRepository: CountriesCommandRepository,
    private readonly countriesQueryRepository: CountriesQueryRepository,
  ) {}

  execute({ countries }: FindOrCreateCountriesCommand): Promise<Country[]> {
    countries = uniqBy(countries, 'name');

    return Promise.all(
      countries.map(({ name }) =>
        this.countriesQueryRepository.findOne({ name }).then((country) => {
          if (country) {
            return country;
          }

          return this.countriesCommandRepository.persist({ name });
        }),
      ),
    );
  }
}
