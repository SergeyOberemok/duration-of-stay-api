import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CountriesCommandRepository } from 'src/countries/repositories/countries-command.repository';
import { Country } from 'src/countries/schemas/country.schema';
import { CreateCountryCommand } from './create-country.command';

@CommandHandler(CreateCountryCommand)
export class CreateCountryHandler
  implements ICommandHandler<CreateCountryCommand>
{
  constructor(
    private readonly countriesCommandRepository: CountriesCommandRepository,
  ) {}

  async execute({ country }: CreateCountryCommand): Promise<Country> {
    return await this.countriesCommandRepository.persist(country);
  }
}
