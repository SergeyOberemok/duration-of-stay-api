import { QueryHandler } from '@nestjs/cqrs';
import { StaysQueryRepository } from '../repositories/stays-query.repository';
import { FindStayQuery } from './find-stay.query';

@QueryHandler(FindStayQuery)
export class FindStayHandler {
  constructor(private readonly staysQueryRepository: StaysQueryRepository) {}

  async execute({ payload: { id } }: FindStayQuery): Promise<any> {
    return this.staysQueryRepository.findById(id);
  }
}
