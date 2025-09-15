import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from 'src/schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async create(data: Partial<Project>): Promise<Project> {
    const newProject = new this.projectModel(data);
    return newProject.save();
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().populate('developers').exec();
  }
}
