import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getComment(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.getUser(id);
  }
}
