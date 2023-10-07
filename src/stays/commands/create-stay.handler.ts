import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StaysCommandRepository } from '../repositories/stays-command.repository';
import { Stay } from '../schemas/stay.schema';
import { CreateStayCommand } from './create-stay.command';

@CommandHandler(CreateStayCommand)
export class CreateStayHandler implements ICommandHandler<CreateStayCommand> {
  constructor(
    private readonly staysCommandRepository: StaysCommandRepository,
  ) {}

  async execute(command: CreateStayCommand): Promise<Stay> {
    return this.staysCommandRepository.persist(command.stay);
  }
}
