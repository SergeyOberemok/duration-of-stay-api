import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IUser } from './models/user.model';
import { User } from './models/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Observable<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() createUserDto: IUser): Observable<User> {
    return this.usersService.create(createUserDto);
  }
}
