import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCountryCommand } from '../commands/actions';
import { CreateCountryDto, UpdateCountryDto } from '../model/dto';
import { Country } from '../model/schemas';
import { FindAllCountriesQuery } from '../queries/actions';

@Injectable()
export class CountriesService {
  constructor(private queryBus: QueryBus, private commandBus: CommandBus) {}

  public async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const countryResult = this.commandBus.execute(
      new CreateCountryCommand(createCountryDto),
    );

    return countryResult;
  }

  findAll() {
    const findAllQueryResult = this.queryBus.execute(
      new FindAllCountriesQuery(),
    );

    return findAllQueryResult;
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
