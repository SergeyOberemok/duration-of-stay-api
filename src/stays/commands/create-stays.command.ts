import { CreateStayDto } from '../dto';

export class CreateStaysCommand {
  constructor(readonly stays: CreateStayDto[]) {}
}
