import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

interface IUserLogin {
  email: string;
  senha: string;
}

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  @UseGuards(LocalAuthGuard)
  login(@Body() user: IUserLogin) {
    return this.authService.login(user.email);
  }
}
