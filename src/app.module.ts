import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CountriesModule } from './countries/countries.module';
import { StaysModule } from './stays/stays.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/duration-of-stay'),
    AuthModule,
    UsersModule,
    CountriesModule,
    StaysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
