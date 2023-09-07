export class CreateCommentDto {
  content: string;
  userId: number;
  articleId: number;

  constructor(init?: Partial<CreateCommentDto>) {
    Object.assign(this, init);
  }
}
