import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  async create(@Body() body: { name: string; email: string }) {
    const { name, email } = body;
    return this.userService.create(name, email);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }
}
