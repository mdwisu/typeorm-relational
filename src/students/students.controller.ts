// student.controller.ts
import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentService } from './students.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post(':id/courses')
  async addCoursesToStudent(
    @Param('id') studentId: number,
    @Body() courseIds: { courseIds: number[] },
  ): Promise<Student> {
    return this.studentService.addCoursesToStudent(
      studentId,
      courseIds.courseIds,
    );
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }
}
