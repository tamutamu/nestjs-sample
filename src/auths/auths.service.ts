import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { Msg } from './interfaces/auths.interfaces';

@Injectable()
export class AuthsService {
  constructor(private readonly prisma: PrismaService) {}

  async signUp(dto: AuthDto): Promise<Msg> {
    try {
      await this.prisma.user.create({
        data: {
          ...dto,
        },
      });
      return {
        message: 'ok',
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('This email is already taken');
        }
      }
      throw error;
    }
  }
}
