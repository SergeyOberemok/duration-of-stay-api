import { IStay } from '../entities/stay.entity';

export class CreateStayDto implements IStay {
  country: string;
  startDate: Date;
  endDate?: Date;
}
