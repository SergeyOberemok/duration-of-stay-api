import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { IUserToken } from 'src/users/models/user.model';
import { User } from 'src/users/models/user.schema';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  public login(@Body() userDto: Record<string, any>): Observable<IUserToken> {
    return this.authService
      .signIn(userDto.email, userDto.password)
      .pipe(map((user: User) => ({ email: user.email, token: 'asdf' })));
  }
}
