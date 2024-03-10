import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Country, ICountry } from 'src/countries/schemas/country.schema';
import { DateCalculator } from 'src/domain/date-calculator/date-calculator';
import { YearsMonthsDays } from 'src/domain/date-calculator/shared';

export interface IStay {
  title: string;
  startDate: Date;
  endDate?: Date;
  country?: ICountry;
  isActive: boolean;
}

@Schema({
  virtuals: true,
})
export class Stay implements IStay {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  startDate: Date;

  @Prop()
  endDate?: Date;
  @Prop()
  country?: Country;
  @Prop()
  isActive: boolean;

  get daysDuration(): number {
    return DateCalculator.getDaysDuration(this.startDate, this.endDate);
  }

  get yearsMonthsDaysDuration(): YearsMonthsDays {
    return DateCalculator.getYearsMonthsDaysDuration(
      this.startDate,
      this.endDate,
    );
  }
}

export const StaySchema = SchemaFactory.createForClass(Stay);

StaySchema.virtual('daysDuration').get(function (this: Stay) {
  return DateCalculator.getDaysDuration(this.startDate, this.endDate);
});
StaySchema.virtual('yearsMonthsDaysDuration').get(function (this: Stay) {
  return DateCalculator.getYearsMonthsDaysDuration(
    this.startDate,
    this.endDate,
  );
});
