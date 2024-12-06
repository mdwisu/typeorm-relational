// course.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  // Mendapatkan semua course
  async findAll(): Promise<Course[]> {
    return this.courseRepository.find({ relations: ['students'] });
  }
}
