/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateVendaDTO } from './dto/create-venda.dto';
import { VendaRepository } from './repositories/vendas.repository';
import { UpdateVendaDto } from './dto/update-venda.dto';
import { VendaHistoryRepository } from '../vendas-histories/repositories/vendas-history.repository';
import { randomUUID } from 'crypto';

@Injectable()
export class VendaService {
    constructor(private vendaRepository: VendaRepository, private vendaHistoryRepository: VendaHistoryRepository){}

    async create(createVendaDTO: CreateVendaDTO ) {
        const venda = await this.vendaRepository.create(createVendaDTO)
        return venda
    }

    async findAll(group: string | undefined) {
        return this.vendaRepository.findAll(group)
    }

    async findOne(id: string){
        const findVenda = await this.vendaRepository.findOne(id)
        return findVenda
    }

    async update(id: string, data: UpdateVendaDto){

        let vendaToHistory: any = await this.vendaRepository.findOne(id)

        const agora = new Date();
        const dia = agora.getDate().toString().padStart(2, '0'); 
        const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); 
        const ano = agora.getFullYear();
        const horas = agora.getHours().toString().padStart(2, '0'); 
        const minutos = agora.getMinutes().toString().padStart(2, '0');
    
        const dataFormatada = `${dia}-${mes}-${ano} ${horas}:${minutos}`;

        vendaToHistory.createdAt = dataFormatada
        vendaToHistory.lastEditted = dataFormatada
        vendaToHistory.id = randomUUID();
        vendaToHistory.os= vendaToHistory.os.id
        delete vendaToHistory.user_id
        delete vendaToHistory.versions
        delete vendaToHistory.client_id

        vendaToHistory.venda_id = id

        const updatedVenda = await this.vendaRepository.update(id, data)

        await this.vendaHistoryRepository.create(vendaToHistory)

        return updatedVenda
    }

    async delete(id: string){
        const updatedVenda = await this.vendaRepository.delete(id)
        return updatedVenda
    }
}
