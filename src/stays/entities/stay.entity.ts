export interface IStay {
  country: string;
  startDate: Date;
  endDate?: Date;
}

export class Stay implements IStay {
  country: string;
  startDate: Date;
  endDate?: Date;
}
