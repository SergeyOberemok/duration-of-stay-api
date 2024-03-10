import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  FindOrCreateCountriesCommand,
  FindOrCreateCountryCommand,
} from './commands';
import { CreateCountryDto, UpdateCountryDto } from './dto';
import { FindAllCountriesQuery } from './queries/find-all-countries.query';
import { Country } from './schemas/country.schema';

@Injectable()
export class CountriesService {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  create(createCountryDto: CreateCountryDto): Promise<Country> {
    return this.commandBus.execute(
      new FindOrCreateCountryCommand(createCountryDto),
    );
  }

  createMany(createCountryDtos: CreateCountryDto[]) {
    return this.commandBus.execute(
      new FindOrCreateCountriesCommand(createCountryDtos),
    );
  }

  findAll() {
    return this.queryBus.execute(new FindAllCountriesQuery());
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
