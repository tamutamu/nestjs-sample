import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CommentsService } from './comments.service';

@Module({
  imports: [PrismaModule],
  providers: [CommentsService],
})
export class CommentsModule {}
