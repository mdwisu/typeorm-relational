import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Atau host PostgreSQL lainnya
      port: 5432, // Default PostgreSQL port
      username: 'postgres', // Username DB
      password: 'postgredwi', // Password DB
      database: 'typeorm_relational', // Nama database
      entities: [User, Post], // Daftar entitas yang digunakan
      synchronize: true, // Hanya di development
    }),
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
