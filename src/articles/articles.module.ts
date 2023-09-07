import { Module } from '@nestjs/common';
import { CommentsModule } from 'src/comments/comments.module';
import { CommentsService } from 'src/comments/comments.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
  imports: [PrismaModule, CommentsModule],
  controllers: [ArticlesController],
  providers: [ArticlesService, CommentsService],
})
export class ArticlesModule {}
