import { Injectable } from '@nestjs/common';
import { CreateEstoqueHistoryDTO } from './dto/create-estoque-history.dto';
import { EstoqueHistoryRepository } from './repositories/estoque-history.repository';

@Injectable()
export class EstoqueHistoryService {
    constructor(private estoqueHistoryRepository: EstoqueHistoryRepository){}

    async create(createEstoqueDTO: CreateEstoqueHistoryDTO ) {
        const estoque = await this.estoqueHistoryRepository.create(createEstoqueDTO)
        return estoque
    }
}
