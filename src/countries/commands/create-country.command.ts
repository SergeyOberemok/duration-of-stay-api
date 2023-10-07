import { CreateCountryDto } from '../dto';

export class CreateCountryCommand {
  constructor(readonly country: CreateCountryDto) {}
}
