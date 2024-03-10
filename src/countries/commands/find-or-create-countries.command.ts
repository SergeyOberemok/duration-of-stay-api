import { CreateCountryDto } from '../dto';

export class FindOrCreateCountriesCommand {
  constructor(readonly countries: CreateCountryDto[]) {}
}
