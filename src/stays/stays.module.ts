import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { staysCommandHandlers } from './commands';
import { staysQueryHandlers } from './queries';
import { staysRepositories } from './repositories';
import { Stay, StaySchema } from './schemas/stay.schema';
import { StaysController } from './stays.controller';
import { StaysService } from './stays.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Stay.name, schema: StaySchema }]),
    CqrsModule,
  ],
  controllers: [StaysController],
  providers: [
    StaysService,
    ...staysRepositories,
    ...staysCommandHandlers,
    ...staysQueryHandlers,
  ],
})
export class StaysModule {}
