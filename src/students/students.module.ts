import { Module } from '@nestjs/common';
import { StudentService } from './students.service';
import { StudentController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Course } from '../courses/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Course])],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentsModule {}
