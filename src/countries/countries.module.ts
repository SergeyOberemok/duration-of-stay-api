import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { commandHandlers } from './commands/handlers';
import { CountriesController } from './countries.controller';
import { Country, CountrySchema } from './model/schemas';
import { queryHandlers } from './queries/handlers';
import { countryRepositories } from './repositories';
import { CountriesService } from './services/countries.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
    CqrsModule,
  ],
  controllers: [CountriesController],
  providers: [
    ...commandHandlers,
    ...queryHandlers,
    ...countryRepositories,
    CountriesService,
  ],
})
export class CountriesModule {}
