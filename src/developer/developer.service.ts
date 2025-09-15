import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Developer } from 'src/schemas/developer.schema';

@Injectable()
export class DeveloperService {
  constructor(
    @InjectModel(Developer.name) private developerModel: Model<Developer>,
  ) {}

  async create(data: Partial<Developer>): Promise<Developer> {
    const newDeveloper = new this.developerModel(data);
    return newDeveloper.save();
  }

  async findAll(): Promise<Developer[]> {
    return this.developerModel.find().populate('projects').exec();
  }
}
