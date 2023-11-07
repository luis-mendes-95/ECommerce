import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class UserIsAdmGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const { user } = context.switchToHttp().getRequest();

    // Verifica se o usuário possui a tag "administrador"
    return user.tags.includes('Administrador');
  }
}
