import { Injectable } from '@nestjs/common';
import { Comment } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create.comments.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async createComment(dto: CreateCommentDto): Promise<Comment> {
    const comment = await this.prisma.comment.create({
      data: {
        ...dto,
      },
    });
    return comment;
  }
}
