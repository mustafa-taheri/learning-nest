import { Body, Controller, Get, Post } from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { Developer } from 'src/schemas/developer.schema';

@Controller('developer')
export class DeveloperController {
  constructor(private readonly developerService: DeveloperService) {}

  @Post()
  async createDeveloper(@Body() data: Partial<Developer>) {
    return this.developerService.create(data);
  }

  @Get()
  async getAllDevelopers() {
    return this.developerService.findAll();
  }
}
