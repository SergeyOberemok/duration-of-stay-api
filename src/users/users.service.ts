import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { User } from './shared';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    new User({ email: 'john', password: '123' }),
  ];

  public findOne(email: string): Observable<User | undefined> {
    const user: User = this.users.find((user: User) => user.email === email);

    return of(user);
  }
}
