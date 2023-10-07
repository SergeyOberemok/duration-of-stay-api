import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindAllCountriesQuery } from '../queries/find-all-countries.query';
import { Country } from '../schemas';

@Injectable()
export class CountriesQueryRepository {
  constructor(
    @InjectModel(Country.name) private readonly countryModel: Model<Country>,
  ) {}

  async findAll(query: FindAllCountriesQuery): Promise<Country[]> {
    return this.countryModel.find(query).exec();
  }

  async findById(id: string): Promise<Country> {
    return this.countryModel.findById(id).exec();
  }
}
