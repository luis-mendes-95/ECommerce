import { Injectable } from '@nestjs/common';
import { CreateProdutoHistoryDTO } from './dto/create-produto-history.dto';
import { ProdutosHistoriesRepository } from './repositories/produto-history.repository';

@Injectable()
export class ProdutosHistoriesService {
    constructor(private produtosHistoriesRepository: ProdutosHistoriesRepository){}

    async create(createProdutoHistoryDto:CreateProdutoHistoryDTO){
        const produtoHistory = await this.produtosHistoriesRepository.create(createProdutoHistoryDto)
        return produtoHistory
    }
}
