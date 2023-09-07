import { Body, Controller, Post } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { AuthDto } from './dto/auth.dto';
import { Msg } from './interfaces/auths.interfaces';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}

  @Post('signup')
  signUp(@Body() dto: AuthDto): Promise<Msg> {
    return this.authsService.signUp(dto);
  }
}
