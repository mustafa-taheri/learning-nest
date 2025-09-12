import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from '../schemas/student.schema';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() data: Partial<Student>) {
    return this.studentService.create(data);
  }

  @Get()
  async getAllStudents() {
    return this.studentService.findAll();
  }

  @Get(':id')
  async getStudentByID(@Param('id') id: string) {
    return this.studentService.byID(id);
  }

  @Put(':id')
  async updateStudent(@Param('id') id: string, @Body() data: Partial<Student>) {
    return this.studentService.update(id, data);
  }

  @Patch(':id')
  async patchUpdateStudent(
    @Param('id') id: string,
    @Body() data: Partial<Student>,
  ) {
    return this.studentService.patchUpdate(id, data);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string) {
    return this.studentService.delete(id);
  }
}
