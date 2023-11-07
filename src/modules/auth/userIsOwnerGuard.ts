import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UserIsOwnerGuard implements CanActivate {canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
  
    const request = context.switchToHttp().getRequest();
    const { id: paramId } = request.params;
    const { id: authenticatedUserId } = request.user;

    return paramId === authenticatedUserId;
  }
}




