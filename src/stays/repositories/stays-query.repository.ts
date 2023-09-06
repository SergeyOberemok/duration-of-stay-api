import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindAllStaysQuery } from '../queries/find-all-stays.query';
import { Stay } from '../schemas/stay.schema';

@Injectable()
export class StaysQueryRepository {
  constructor(@InjectModel(Stay.name) private stayModel: Model<Stay>) {}

  public async findAll(query: FindAllStaysQuery): Promise<Stay[]> {
    return this.stayModel.find(query).exec();
  }

  public async findById(id: string): Promise<Stay> {
    return this.stayModel.findById(id).exec();
  }
}
