import { QueryHandler } from '@nestjs/cqrs';
import { StaysQueryRepository } from '../repositories/stays-query.repository';
import { Stay } from '../schemas/stay.schema';
import { StaysCollection } from '../shared';
import { GetStaysDurationQuery } from './get-stays-duration.query';

@QueryHandler(GetStaysDurationQuery)
export class GetStaysDurationHandler {
  constructor(private readonly staysQueryRepository: StaysQueryRepository) {}

  async execute(query: GetStaysDurationQuery): Promise<number> {
    const stays: Stay[] = await this.staysQueryRepository.findAll(query);

    return StaysCollection.from(stays).getDaysDuration();
  }
}
