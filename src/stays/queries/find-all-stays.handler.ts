import { QueryHandler } from '@nestjs/cqrs';
import { FindAllStaysQuery } from './find-all-stays.query';
import { StaysQueryRepository } from '../repositories/stays-query.repository';
import { Stay } from '../schemas/stay.schema';

@QueryHandler(FindAllStaysQuery)
export class FindAllStaysHandler {
  constructor(private staysQueryRepository: StaysQueryRepository) {}

  public async execute(query: FindAllStaysQuery): Promise<Stay[]> {
    return this.staysQueryRepository.findAll(query);
  }
}
