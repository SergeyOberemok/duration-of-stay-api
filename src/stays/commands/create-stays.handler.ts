import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StaysCommandRepository } from '../repositories';
import { Stay } from '../schemas/stay.schema';
import { CreateStaysCommand } from './create-stays.command';

@CommandHandler(CreateStaysCommand)
export class CreateStaysHandler implements ICommandHandler<CreateStaysCommand> {
  constructor(
    private readonly staysCommandRepository: StaysCommandRepository,
  ) {}

  async execute(command: CreateStaysCommand): Promise<Stay[]> {
    return this.staysCommandRepository.persistMany(command.stays);
  }
}
