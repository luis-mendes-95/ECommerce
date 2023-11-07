/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ItemVendaRepository } from './repositories/item-vendas.repository';
import { CreateItemVendaDTO } from './dto/create-item-venda.dto';
import { UpdateItemVendaDto } from './dto/update-item-venda.dto';

@Injectable()
export class ItemVendaService {
    constructor(private itemVendaRepository: ItemVendaRepository){}

    async create(createItemVendaDTO: CreateItemVendaDTO ) {
        const itemVenda = await this.itemVendaRepository.create(createItemVendaDTO)
        return itemVenda
    }

    async findAll(group: string | undefined) {
        return this.itemVendaRepository.findAll(group)
    }

    async findOne(id: string){
        const findItemVenda = await this.itemVendaRepository.findOne(id)
        return findItemVenda
    }

    async update(id: string, data: UpdateItemVendaDto){

        const updatedItemVenda = await this.itemVendaRepository.update(id, data)

        return updatedItemVenda
    }

    async delete(id: string){
        const updatedItemVenda = await this.itemVendaRepository.delete(id)
        return updatedItemVenda
    }
}
