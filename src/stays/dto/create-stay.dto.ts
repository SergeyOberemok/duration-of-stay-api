import { CreateCountryDto } from 'src/countries/dto';
import { IStay } from '../schemas/stay.schema';

export class CreateStayDto implements IStay {
  title: string;
  startDate: Date;
  endDate?: Date;
  country?: CreateCountryDto;
}
