import { CreateCommentDto } from 'src/comments/dto/create.comments.dto';

export class CreateArticleDto {
  content: string;
  userId: number;
}

export class CreateArticleCommentDto
  implements Omit<CreateCommentDto, 'articleId'>
{
  content: string;
  userId: number;
}
