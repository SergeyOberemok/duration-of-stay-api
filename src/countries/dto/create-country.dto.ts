import { ICountry } from '../schemas/country.schema';

export class CreateCountryDto implements ICountry {
  name: string;
  cities?: string[];
}
