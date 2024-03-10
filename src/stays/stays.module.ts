import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CreateStayHandler,
  CreateStaysHandler,
  DeleteStayHandler,
} from './commands';
import {
  FindStayHandler,
  FindStaysHandler,
  GetStayDurationHandler,
  GetStaysDurationHandler,
} from './queries';
import { QueryStaysController } from './query-stays.controller';
import { StaysCommandRepository, StaysQueryRepository } from './repositories';
import { Stay, StaySchema } from './schemas/stay.schema';
import { StaysController } from './stays.controller';
import { StaysService } from './stays.service';

const staysCommandHandlers = [
  CreateStayHandler,
  CreateStaysHandler,
  DeleteStayHandler,
];

const staysQueryHandlers = [
  FindStayHandler,
  FindStaysHandler,
  GetStayDurationHandler,
  GetStaysDurationHandler,
];

const staysRepositories = [StaysQueryRepository, StaysCommandRepository];

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Stay.name, schema: StaySchema }]),
    CqrsModule,
  ],
  controllers: [StaysController, QueryStaysController],
  providers: [
    StaysService,
    ...staysRepositories,
    ...staysCommandHandlers,
    ...staysQueryHandlers,
  ],
})
export class StaysModule {}
