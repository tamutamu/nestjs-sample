import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getUsers(userId: number): Promise<User[]> {
    return this.prisma.user.findMany({
      where: {
        id: userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
