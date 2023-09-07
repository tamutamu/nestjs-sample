import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Article } from '@prisma/client';
import { CommentsService } from 'src/comments/comments.service';
import { CreateCommentDto } from 'src/comments/dto/create.comments.dto';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(
    private readonly articlesService: ArticlesService,
    private readonly commentService: CommentsService,
  ) {}

  @Get()
  getArticles(): Promise<Article[]> {
    return this.articlesService.getArticles();
  }

  @Get(':id')
  getArticle(@Param('id', ParseIntPipe) id: number): Promise<Article> {
    return this.articlesService.getArticle(id);
  }

  @Post()
  createArticle(@Body() dto: CreateArticleDto): Promise<Article> {
    return this.articlesService.createArticle(dto);
  }

  @Post(':id/comments')
  createComment(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateCommentDto,
  ): Promise<Article> {
    dto.articleId = id;
    return this.commentService.createComment(dto);
  }
}
