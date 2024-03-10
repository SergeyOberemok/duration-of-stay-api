import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { countriesCommandHandlers } from './commands';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { countriesQueryHandlers } from './queries';
import { countryRepositories } from './repositories';
import { Country, CountrySchema } from './schemas/country.schema';

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
