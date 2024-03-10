import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { StaysQueryRepository } from '../repositories/stays-query.repository';
import { Stay } from '../schemas/stay.schema';
import { FindStayQuery } from './find-stay.query';
import { FindStaysQuery } from './find-stays.query';

@QueryHandler(FindStaysQuery)
export class FindStaysHandler implements ICommandHandler<FindStayQuery> {
  constructor(private readonly staysQueryRepository: StaysQueryRepository) {}

  async execute(query: FindStaysQuery): Promise<Stay[]> {
    return this.staysQueryRepository.findAll(query);
  }
}
