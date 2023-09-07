import { Injectable, NotFoundException } from '@nestjs/common';
import { Article } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  getArticles(): Promise<Article[]> {
    return this.prisma.article.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getArticle(id: number): Promise<Article> {
    const comment = await this.prisma.article.findFirst({
      where: {
        id,
      },
    });

    if (!comment) {
      throw new NotFoundException('見つかりません');
    }

    return comment;
  }

  async createArticle(dto: CreateArticleDto): Promise<Article> {
    const comment = await this.prisma.article.create({
      data: {
        ...dto,
      },
    });
    return comment;
  }
}
