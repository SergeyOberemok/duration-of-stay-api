import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from '../model/schemas';

@Injectable()
export class CountriesQueryRepository {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<Country>,
  ) {}

  public async findAll(): Promise<any> {
    const countriesResult = this.countryModel.find().exec();

    return countriesResult;
  }

  public async findById(id: string): Promise<any> {
    const countryResult = this.countryModel.findById(id).exec();

    return countryResult;
  }
}
