import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Stay } from '../schemas/stay.schema';

@Injectable()
export class StaysQueryRepository {
  constructor(
    @InjectModel(Stay.name) private readonly stayModel: Model<Stay>,
  ) {}

  async findAll(query: any): Promise<Stay[]> {
    return this.stayModel.find(query).sort({ startDate: 1 }).exec();
  }

  async findById(id: string): Promise<Stay> {
    return this.stayModel.findById({ _id: new Types.ObjectId(id) }).exec();
  }
}
