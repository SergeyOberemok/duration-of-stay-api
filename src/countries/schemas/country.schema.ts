import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface ICountry {
  name: string;
  cities?: string[];
}

@Schema()
export class Country implements ICountry {
  @Prop({ required: true })
  name: string;

  @Prop()
  cities?: string[];
}

export const CountrySchema = SchemaFactory.createForClass(Country);
