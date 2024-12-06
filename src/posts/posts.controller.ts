import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Post()
  async create(
    @Body() body: { userId: number; title: string; content: string },
  ) {
    const { userId, title, content } = body;
    return this.postService.create(userId, title, content);
  }

  @Get()
  async findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.postService.findOne(id);
  }
}
