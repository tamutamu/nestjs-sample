import { Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create.comment.dto';

@Injectable()
export class CommentService {
    constructor(private prisma: PrismaService) {}

    getComments(): Promise<Comment[]> {
        return this.prisma.comment.findMany({
          orderBy: {
            createdAt: 'desc',
          },
        });
      }

    async getComment(id: number): Promise<Comment> {
        const comment = await this.prisma.comment.findFirst({
          where: {
            id,
          }
        });

        if(!comment) {
          throw new NotFoundException("見つかりません");
        }

        return comment
      }

      async createComment(dto: CreateCommentDto): Promise<Comment> {
        const comment = await this.prisma.comment.create({
          data: {
            ...dto,
          },
        });
        return comment;
      }
}