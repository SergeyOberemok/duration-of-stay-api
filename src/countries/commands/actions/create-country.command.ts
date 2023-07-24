import { CreateCountryDto } from '../../model/dto';

export class CreateCountryCommand {
  constructor(public readonly country: CreateCountryDto) {}
}
