import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { StaysQueryRepository } from '../repositories/stays-query.repository';
import { Stay } from '../schemas/stay.schema';
import { GetStayDurationQuery } from './get-stay-duration.query';

@QueryHandler(GetStayDurationQuery)
export class GetStayDurationHandler
  implements ICommandHandler<GetStayDurationQuery>
{
  constructor(private readonly staysRepository: StaysQueryRepository) {}

  async execute({ payload: { id } }: GetStayDurationQuery) {
    const stay: Stay = await this.staysRepository.findById(id);

    return stay.daysDuration;
  }
}
