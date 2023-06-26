import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable, iif, mergeMap, of, take, throwError } from 'rxjs';
import { User } from 'src/users/shared';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  public signIn(email: string, password: string): Observable<User> {
    return this.usersService.findOne(email).pipe(
      mergeMap((user: User) =>
        iif(
          () => user && user.password === password,
          of(user),
          throwError(() => new UnauthorizedException()),
        ),
      ),
      take(1),
    );
  }
}
