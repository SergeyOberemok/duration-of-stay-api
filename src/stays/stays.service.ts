import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { YearsMonthsDays } from 'src/domain/date-calculator/shared';
import { CreateStayCommand } from './commands/create-stay.command';
import { CreateStayDto } from './dto/create-stay.dto';
import { UpdateStayDto } from './dto/update-stay.dto';
import { FindStayQuery } from './queries/find-stay.query';
import { FindStaysQuery } from './queries/find-stays.query';
import { GetStayDurationQuery } from './queries/get-stay-duration.query';
import { GetStaysDurationQuery } from './queries/get-stays-duration.query';
import { Stay } from './schemas/stay.schema';

@Injectable()
export class StaysService {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  async create(createStayDto: CreateStayDto): Promise<Stay> {
    return this.commandBus.execute(new CreateStayCommand(createStayDto));
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

  remove(id: number) {
    return `This action removes a #${id} stay`;
  }

  getStaysDuration(): Promise<number> {
    return this.queryBus.execute(new GetStaysDurationQuery());
  }

  getStayDuration(id: string): Promise<YearsMonthsDays> {
    return this.queryBus.execute(new GetStayDurationQuery({ id }));
  }
}
