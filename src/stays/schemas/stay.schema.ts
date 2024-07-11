import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Country, ICountry } from 'src/countries/schemas/country.schema';
import { DateCalculator } from 'src/domain/date-calculator/date-calculator';
import { YearsMonthsDays } from 'src/domain/date-calculator/shared';

export interface IStay {
  title: string;
  start: Date;
  end?: Date;
  country?: ICountry;
  isActive: boolean;
}

@Schema({
  virtuals: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
})
export class Stay implements IStay {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  start: Date;

  @Prop()
  end?: Date;
  @Prop()
  country?: Country;
  @Prop()
  isActive: boolean;

  get daysDuration(): number {
    return DateCalculator.getDaysDuration(this.start, this.end);
  }

  get durations(): YearsMonthsDays {
    return DateCalculator.getYearsMonthsDaysDuration(this.start, this.end);
  }
}

export const StaySchema = SchemaFactory.createForClass(Stay);

StaySchema.virtual('daysDuration').get(function (this: Stay) {
  return DateCalculator.getDaysDuration(this.start, this.end);
});
StaySchema.virtual('durations').get(function (this: Stay) {
  return DateCalculator.getYearsMonthsDaysDuration(this.start, this.end);
});
