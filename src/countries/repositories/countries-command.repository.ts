import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCountryDto } from '../model/dto';
import { Country } from '../model/schemas';

@Injectable()
export class CountriesCommandRepository {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<Country>,
  ) {}

  public async persist(createCountryDto: CreateCountryDto): Promise<Country> {
    const createdCountry = new this.countryModel(createCountryDto).save();

    return createdCountry;
  }
}
