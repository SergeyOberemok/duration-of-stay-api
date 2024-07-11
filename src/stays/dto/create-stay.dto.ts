import { CreateCountryDto } from 'src/countries/dto';
import { IStay } from '../schemas/stay.schema';

export class CreateStayDto implements IStay {
  title: string;
  start: Date;
  end?: Date;
  country?: CreateCountryDto;
  isActive: boolean;

  public constructor(params?: IStay) {
    if (!params) {
      return;
    }

    Object.assign(this, params);
  }
}
