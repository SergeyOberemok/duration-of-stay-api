import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCountryDto } from '../dto';
import { Country } from '../schemas/country.schema';

@Injectable()
export class CountriesCommandRepository {
  constructor(
    @InjectModel(Country.name) private readonly countryModel: Model<Country>,
  ) {}

  async persist(createCountryDto: CreateCountryDto): Promise<Country> {
    return new this.countryModel(createCountryDto).save();
  }
}
