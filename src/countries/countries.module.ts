import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CreateCountryHandler,
  FindOrCreateCountriesHandler,
  FindOrCreateCountryHandler,
} from './commands';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { FindAllCountriesHandler } from './queries';
import {
  CountriesCommandRepository,
  CountriesQueryRepository,
} from './repositories';
import { Country, CountrySchema } from './schemas/country.schema';

const countryRepositories = [
  CountriesQueryRepository,
  CountriesCommandRepository,
];

const countriesCommandHandlers = [
  CreateCountryHandler,
  FindOrCreateCountryHandler,
  FindOrCreateCountriesHandler,
];

const countriesQueryHandlers = [FindAllCountriesHandler];

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
    CqrsModule,
  ],
  controllers: [CountriesController],
  providers: [
    CountriesService,
    ...countryRepositories,
    ...countriesCommandHandlers,
    ...countriesQueryHandlers,
  ],
})
export class CountriesModule {}
