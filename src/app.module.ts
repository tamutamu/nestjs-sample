import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UserModule, AuthModule, PrismaModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
