import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateStayCommand } from './commands/create-stay.command';
import { CreateStayDto } from './dto/create-stay.dto';
import { UpdateStayDto } from './dto/update-stay.dto';
import { FindAllStaysQuery } from './queries/find-all-stays.query';
import { Stay } from './schemas/stay.schema';

@Injectable()
export class StaysService {
  constructor(private queryBus: QueryBus, private commandBus: CommandBus) {}

  public async create(createStayDto: CreateStayDto): Promise<Stay> {
    return this.commandBus.execute(new CreateStayCommand(createStayDto));
  }

  findAll() {
    return this.queryBus.execute(new FindAllStaysQuery());
  }

  findOne(id: number) {
    return `This action returns a #${id} stay`;
  }

  update(id: number, updateStayDto: UpdateStayDto) {
    return `This action updates a #${id} stay`;
  }

  remove(id: number) {
    return `This action removes a #${id} stay`;
  }
}
