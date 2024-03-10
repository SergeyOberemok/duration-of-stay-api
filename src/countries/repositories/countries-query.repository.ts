import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from '../schemas/country.schema';

@Injectable()
export class CountriesQueryRepository {
  constructor(
    @InjectModel(Country.name) private readonly countryModel: Model<Country>,
  ) {}

  async findAll(query): Promise<Country[]> {
    return this.countryModel.find(query).exec();
  }

  async findById(id: string): Promise<Country> {
    return this.countryModel.findById(id).exec();
  }

  async findOne(query): Promise<Country> {
    return this.countryModel.findOne(query).exec();
  }
}
