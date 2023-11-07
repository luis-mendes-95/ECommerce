/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateEstoqueDTO } from './dto/create-estoque.dto';
import { EstoqueRepository } from './repositories/estoque.repository';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { EstoqueHistoryRepository } from '../estoque-histories/repositories/estoque-history.repository';
import { Estoque } from './entities/estoque.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class EstoqueService {
    constructor(private estoqueRepository: EstoqueRepository, private estoqueHistoryRepository: EstoqueHistoryRepository){}

    async create(createEstoqueDTO: CreateEstoqueDTO ) {
        const estoque = await this.estoqueRepository.create(createEstoqueDTO)
        return estoque
    }

    async findAll(group: string | undefined) {
        return this.estoqueRepository.findAll(group)
    }

    async findOne(id: string){
        const findEstoque = await this.estoqueRepository.findOne(id)
        return findEstoque
    }

    async update(id: string, data: UpdateEstoqueDto){

        let estoqueToHistory: any = await this.estoqueRepository.findOne(id)

        const agora = new Date();
        const dia = agora.getDate().toString().padStart(2, '0'); 
        const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); 
        const ano = agora.getFullYear();
        const horas = agora.getHours().toString().padStart(2, '0'); 
        const minutos = agora.getMinutes().toString().padStart(2, '0');
    
        const dataFormatada = `${dia}-${mes}-${ano} ${horas}:${minutos}`;

        estoqueToHistory.createdAt = dataFormatada
        estoqueToHistory.lastEditted = dataFormatada
        estoqueToHistory.id = randomUUID();
        delete estoqueToHistory.user_id
        delete estoqueToHistory.versions

        estoqueToHistory.estoque_id = id

        const updatedEstoque = await this.estoqueRepository.update(id, data)

        await this.estoqueHistoryRepository.create(estoqueToHistory)

        return updatedEstoque
    }

    async delete(id: string){
        const updatedEstoque = await this.estoqueRepository.delete(id)
        return updatedEstoque
    }
}
