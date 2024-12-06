import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private usersService: UsersService,
  ) {}

  async create(userId: number, title: string, content: string): Promise<Post> {
    const user = await this.usersService.findOne(userId);
    const post = this.postRepository.create({ user, title, content });
    return await this.postRepository.save(post);
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    return this.postRepository.findOne({ where: { id }, relations: ['user'] });
  }
}
