import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async create(data: Partial<Student>): Promise<Student> {
    const newStudent = new this.studentModel(data);
    return newStudent.save();
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async byID(id: string): Promise<Student | null> {
    return this.studentModel.findById(id).exec();
  }

  async update(id: string, data: Partial<Student>): Promise<Student | null> {
    const updated = await this.studentModel.findByIdAndUpdate(
      id,
      {
        name: data.name ?? null,
        rollNumber: data.rollNumber ?? null,
        email: data.email ?? null,
      },
      {
        overwrite: true,
        new: true,
      },
    );
    return updated;
    // return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async patchUpdate(
    id: string,
    data: Partial<Student>,
  ): Promise<Student | null> {
    return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<Student | null> {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
