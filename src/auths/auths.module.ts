import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthsController } from './auths.controller';
import { AuthsService } from './auths.service';

@Module({
  imports: [PrismaModule],
  controllers: [AuthsController],
  providers: [AuthsService],
})
export class AuthsModule {}
