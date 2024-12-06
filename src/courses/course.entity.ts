// course.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Student } from '../students/student.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  // Relasi Many-to-Many
  @ManyToMany(() => Student, (student) => student.courses)
  students: Student[];
}
