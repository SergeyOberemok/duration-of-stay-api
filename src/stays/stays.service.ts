import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FindOrCreateCountriesCommand } from 'src/countries/commands';
import { FindOrCreateCountryCommand } from 'src/countries/commands/find-or-create-country.command';
import { YearsMonthsDays } from 'src/domain/date-calculator/shared';
import {
  CreateStayCommand,
  CreateStaysCommand,
  DeleteStayCommand,
} from './commands';
import { CreateStayDto, UpdateStayDto } from './dto';
import {
  FindStayQuery,
  FindStaysQuery,
  GetStayDurationQuery,
  GetStaysDurationQuery,
} from './queries';
import { Stay } from './schemas/stay.schema';
import { StaysDateMergerAdapter } from './shared';

@Injectable()
export class StaysService {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  create(createStayDto: CreateStayDto): Promise<Stay> {
    this.commandBus.execute(
      new FindOrCreateCountryCommand(createStayDto.country),
    );

    return this.commandBus.execute(new CreateStayCommand(createStayDto));
  }

  createMany(createStayDtos: CreateStayDto[]): Promise<Stay[]> {
    this.commandBus.execute(
      new FindOrCreateCountriesCommand(
        createStayDtos.map((createStayDto) => createStayDto.country),
      ),
    );

    const mergedByDatesStayDtos = StaysDateMergerAdapter.merge(createStayDtos);

    return this.commandBus.execute(
      new CreateStaysCommand(mergedByDatesStayDtos),
    );
  }

  findAll(): Promise<Stay[]> {
    return this.queryBus.execute(new FindStaysQuery());
  }

  findOne(id: string): Promise<Stay> {
    return this.queryBus.execute(new FindStayQuery({ id }));
  }

  update(id: number, updateStayDto: UpdateStayDto) {
    return `This action updates a #${id} stay`;
  }

  remove(id: string) {
    return this.commandBus.execute(new DeleteStayCommand(id));
  }

  getStaysDuration(): Promise<number> {
    return this.queryBus.execute(new GetStaysDurationQuery());
  }

  getStayDuration(id: string): Promise<YearsMonthsDays> {
    return this.queryBus.execute(new GetStayDurationQuery({ id }));
  }
}
