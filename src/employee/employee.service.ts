import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from 'src/schemas/employee.schema';
import { Profile } from 'src/schemas/profile.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async create(data: Partial<Employee>): Promise<Employee> {
    const newEmployee = new this.employeeModel(data);
    // Data Example Embedding
    // {"name" : "Emp1", "address":{"street": "somthing","city":"somthing",...etc}, "salary":"25k",...etc}
    // Data Example Referencing
    // {"name" : "Emp2", "salaray": "25k", "profile": profile._id, "address":{"street": "somthing","city":"somthing",...etc} ...etc}
    return newEmployee.save();
  }

  async createProfile(data: Partial<Profile>): Promise<Profile> {
    const newProfile = new this.profileModel(data);
    return newProfile.save();
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().populate('profile').exec();
  }
}
