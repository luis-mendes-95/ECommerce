import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email', // Campo correspondente ao email no JSON de solicitação
      passwordField: 'senha', // Campo correspondente à senha no JSON de solicitação
    });
  }

  async validate(email: string, senha: string) {
    const user = await this.authService.validateUser(email, senha);
    if (!user) {
      throw new UnauthorizedException('Invalid email or senha');
    }
    return user;
  }
}
