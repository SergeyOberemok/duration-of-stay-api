import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IStay, Stay as StayBase } from '../entities/stay.entity';

@Schema()
export class Stay extends StayBase implements IStay {
  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  startDate: Date;
}

export const StaySchema = SchemaFactory.createForClass(Stay);
