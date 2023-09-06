import { CreateCountryDto } from '../dto';

export class CreateCountryCommand {
  constructor(public readonly country: CreateCountryDto) {}
}
