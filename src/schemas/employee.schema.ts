import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address } from './address.schema';

@Schema({ timestamps: true })
export class Employee extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Address })
  address: Address;

  @Prop({ required: true, unique: true })
  employeeId: string;

  @Prop({ required: true })
  designation: string;

  @Prop({ default: 0 })
  salary: number;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
