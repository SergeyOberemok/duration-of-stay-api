import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Country as CountryBase, ICountry } from '../entities';

@Schema()
export class Country extends CountryBase implements ICountry {
  @Prop({ required: true })
  name: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
