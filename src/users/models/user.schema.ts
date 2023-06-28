import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IUser } from './user.model';

@Schema()
export class User implements IUser {
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;

  constructor(params?: IUser) {
    if (params) {
      Object.assign(this, params);
    }
  }
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
