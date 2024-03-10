import { CreateCountryDto } from '../dto';

export class FindOrCreateCountryCommand {
  constructor(readonly country: CreateCountryDto) {}
}
