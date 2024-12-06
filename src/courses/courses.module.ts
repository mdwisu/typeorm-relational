import { Module } from '@nestjs/common';
import { CourseService } from './courses.service';
import { CourseController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CourseService],
  controllers: [CourseController],
  exports: [CourseService],
})
export class CoursesModule {}
