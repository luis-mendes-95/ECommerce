/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateVendaHistoryDTO } from './dto/create-venda-history.dto';
import { VendaHistoryRepository } from './repositories/vendas-history.repository';

@Injectable()
export class VendaHistoryService {
    constructor(private vendaHistoryRepository: VendaHistoryRepository){}

    async create(createVendaDTO: CreateVendaHistoryDTO ) {
        const venda = await this.vendaHistoryRepository.create(createVendaDTO)
        return venda
    }
}
