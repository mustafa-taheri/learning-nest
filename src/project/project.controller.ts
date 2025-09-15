import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from 'src/schemas/project.schema';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async createProject(@Body() data: Partial<Project>) {
    return this.projectService.create(data);
  }

  @Get()
  async getAllProjects() {
    return this.projectService.findAll();
  }
}
