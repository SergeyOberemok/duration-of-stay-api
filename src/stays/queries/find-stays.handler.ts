import { QueryHandler } from '@nestjs/cqrs';
import { StaysQueryRepository } from '../repositories/stays-query.repository';
import { Stay } from '../schemas/stay.schema';
import { FindStaysQuery } from './find-stays.query';

@QueryHandler(FindStaysQuery)
export class FindStaysHandler {
  constructor(private readonly staysQueryRepository: StaysQueryRepository) {}

  async execute(query: FindStaysQuery): Promise<Stay[]> {
    return this.staysQueryRepository.findAll(query);
  }
}
