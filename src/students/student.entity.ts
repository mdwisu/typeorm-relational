// student.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Course } from '../courses/course.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Relasi Many-to-Many
  @ManyToMany(() => Course, (course) => course.students)
  @JoinTable() // Menggunakan Join Table
  courses: Course[];
}
