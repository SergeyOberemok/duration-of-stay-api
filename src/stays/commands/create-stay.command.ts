import { CreateStayDto } from 'src/stays/dto';

export class CreateStayCommand {
  constructor(readonly stay: CreateStayDto) {}
}
