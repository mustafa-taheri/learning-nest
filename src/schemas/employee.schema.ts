import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Address } from './address.schema';
import { Profile } from './profile.schema';

@Schema({ timestamps: true })
export class Employee extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Address })
  address: Address;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Profile' })
  profile: Profile;

  @Prop({ required: true, unique: true })
  employeeId: string;

  @Prop()
  designation: string;

  @Prop({ default: 0 })
  salary: number;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
