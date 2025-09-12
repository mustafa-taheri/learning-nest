import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Address {
  @Prop({ required: true })
  houseNumber: string;

  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  zipCode: string;
}
