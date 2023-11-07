/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userEmail: string, userPassword: string) {

    const user = await this.userService.findByEmail(userEmail);

    if (user) {

      const passwordMatch = await compare(userPassword, user.senha);

      if (passwordMatch) {
        return { email: user.email };
      }
      
    }

    return null;
  }

  async login(email: string) {
    const user = await this.userService.findByEmail(email);
    
    // Suponha que user.tags contenha as tags do usuário
    return {
      token: this.jwtService.sign(
        { email, tags: user.tags }, // Inclua as tags no payload do token
        { subject: user.id }
      ),
      user_id: user.id
    };
  }
  
}
