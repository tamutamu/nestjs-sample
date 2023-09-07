import {
    Controller,
    Get,
    Post,
    Body,
    ParseIntPipe,
    Req,
    Param
} from '@nestjs/common';
import { Comment } from '@prisma/client';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
    
  @Get()
  getTasks(@Req() req: Request): Promise<Comment[]> {
    return this.commentService.getComments();
  }

  @Get(':id')
  getComment(
    @Param('id', ParseIntPipe) taskId: number,
  ): Promise<Comment> {
    return this.commentService.getComment(taskId);
  }

  @Post()
  createTask(@Body() dto: CreateCommentDto): Promise<Comment> {
    return this.commentService.createComment(dto);
  }
}
