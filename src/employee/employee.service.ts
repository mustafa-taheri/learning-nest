import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from 'src/schemas/employee.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
  ) {}

  async create(data: Partial<Employee>): Promise<Employee> {
    const newEmployee = new this.employeeModel(data);
    // Data Example
    // {name : Emp1, address:{street: "somthing",city:"somthing",...etc}, salary:"25k",...etc}
    return newEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }
}
