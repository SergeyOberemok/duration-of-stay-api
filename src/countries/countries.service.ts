import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCountryCommand } from './commands/create-country.command';
import { CreateCountryDto, UpdateCountryDto } from './dto';
import { FindAllCountriesQuery } from './queries/find-all-countries.query';
import { Country } from './schemas';

@Injectable()
export class CountriesService {
  constructor(private queryBus: QueryBus, private commandBus: CommandBus) {}

  public async create(createCountryDto: CreateCountryDto): Promise<Country> {
    return this.commandBus.execute(new CreateCountryCommand(createCountryDto));
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
