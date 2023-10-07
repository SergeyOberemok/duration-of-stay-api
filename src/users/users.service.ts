import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import { IUser } from './models/user.model';
import { User } from './models/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  findAll(): Observable<User[]> {
    const usersResult = this.userModel.find().exec();

    return from(usersResult);
  }
  findOne(email: string): Observable<User | undefined> {
    const userResult = this.userModel.findOne({ email }).exec();

    return from(userResult);
  }

  create(createUserDto: IUser): Observable<User> {
    const userResult = new this.userModel(createUserDto).save();

    return from(userResult);
  }
}
