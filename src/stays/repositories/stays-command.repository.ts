import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateStayDto } from '../dto';
import { Stay } from '../schemas/stay.schema';

@Injectable()
export class StaysCommandRepository {
  constructor(
    @InjectModel(Stay.name) private readonly stayModel: Model<Stay>,
  ) {}

  async persist(createStayDto: CreateStayDto): Promise<Stay> {
    return new this.stayModel(createStayDto).save();
  }

  async remove(id: string): Promise<boolean> {
    return await this.stayModel
      .deleteOne({ _id: new Types.ObjectId(id) })
      .exec()
      .then((result) => result.deletedCount === 1);
  }
}
