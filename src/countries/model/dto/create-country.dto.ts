import { ICountry } from '../entities';

export class CreateCountryDto implements ICountry {
  name: string;
}
