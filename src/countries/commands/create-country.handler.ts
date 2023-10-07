import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Country } from 'src/countries/schemas';
import { CountriesCommandRepository } from 'src/countries/repositories/countries-command.repository';
import { CreateCountryCommand } from './create-country.command';

@CommandHandler(CreateCountryCommand)
export class CreateCountryHandler
  implements ICommandHandler<CreateCountryCommand>
{
  constructor(
    private readonly countriesCommandRepository: CountriesCommandRepository,
  ) {}

  async execute(command: CreateCountryCommand): Promise<Country> {
    return await this.countriesCommandRepository.persist(command.country);
  }
}
