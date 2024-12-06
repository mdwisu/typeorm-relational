// course.controller.ts
import { Controller, Get } from '@nestjs/common';
import { Course } from './course.entity';
import { CourseService } from './courses.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }
}
