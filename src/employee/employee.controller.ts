import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from 'src/schemas/employee.schema';
import { Profile } from 'src/schemas/profile.schema';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body() data: Partial<Employee>) {
    return this.employeeService.create(data);
  }

  @Post('profile')
  async createProfile(@Body() data: Partial<Profile>) {
    return this.employeeService.createProfile(data);
  }

  @Get()
  async getAllEmployees() {
    return this.employeeService.findAll();
  }
}
