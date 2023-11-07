import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ProdutosRepository } from '../produtos/repositories/produtos.repository';

@Injectable()
export class UserIsProductOwnerGuard implements CanActivate {

  constructor(private produtosRepository: ProdutosRepository) {}

  async canActivate(context: ExecutionContext,): Promise<boolean> {
    
    const request = context.switchToHttp().getRequest();
    const { id: paramId } = request.params;
    const produto = await this.produtosRepository.findOne(paramId)
    const { id: authenticatedUserId } = request.user;
    return produto.user_id === authenticatedUserId;
  }
}
