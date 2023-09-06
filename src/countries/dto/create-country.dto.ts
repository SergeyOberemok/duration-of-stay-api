import { ICountry } from '../entities/country.entity';

export class CreateCountryDto implements ICountry {
  name: string;
}
