import { CreateStayDto } from 'src/stays/dto';

export class CreateStayCommand {
  constructor(public readonly stay: CreateStayDto) {}
}
