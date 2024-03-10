import { CommandHandler } from '@nestjs/cqrs';
import { StaysCommandRepository } from '../repositories/stays-command.repository';
import { DeleteStayCommand } from './delete-stay.command';

@CommandHandler(DeleteStayCommand)
export class DeleteStayHandler {
  constructor(
    private readonly staysCommandRepository: StaysCommandRepository,
  ) {}

  async execute({ id }: DeleteStayCommand): Promise<boolean> {
    return this.staysCommandRepository.remove(id);
  }
}
