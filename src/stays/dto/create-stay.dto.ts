import { IStay } from '../schemas/stay.schema';

export class CreateStayDto implements IStay {
  title: string;
  startDate: Date;
  endDate?: Date;
  country?: string;
}
