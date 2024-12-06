// student.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Student } from './student.entity';
import { Course } from '../courses/course.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  // Menambahkan course ke student
  async addCoursesToStudent(
    studentId: number,
    courseIds: number[],
  ): Promise<Student> {
    const student = await this.studentRepository.findOne({
      where: { id: studentId },
      relations: ['courses'], // Ambil relasi courses
    });
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    // Fetch the courses by their IDs
    const courses = await this.courseRepository.find({
      where: {
        id: In(courseIds),
      },
    });

    student.courses = [...student.courses, ...courses];

    return this.studentRepository.save(student);
  }

  // Mendapatkan semua student dengan courses mereka
  async findAll(): Promise<Student[]> {
    return this.studentRepository.find({ relations: ['courses'] });
  }
}
