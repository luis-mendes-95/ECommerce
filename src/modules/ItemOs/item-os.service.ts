/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ItemOsRepository } from './repositories/item-os.repository';
import { CreateItemOsDTO } from './dto/create-item-os.dto';
import { UpdateItemOsDto } from './dto/update-item-os.dto';

@Injectable()
export class ItemOsService {
    constructor(private itemOsRepository: ItemOsRepository){}

    async create(createItemOsDTO: CreateItemOsDTO ) {
        const itemOs = await this.itemOsRepository.create(createItemOsDTO)
        return itemOs
    }

    async findAll(group: string | undefined) {
        return this.itemOsRepository.findAll(group)
    }

    async findOne(id: string){
        const findItemOs = await this.itemOsRepository.findOne(id)
        return findItemOs
    }

    async update(id: string, data: UpdateItemOsDto){

        const updatedItemOs = await this.itemOsRepository.update(id, data)

        return updatedItemOs
    }

    async delete(id: string){
        const updatedItemOs = await this.itemOsRepository.delete(id)
        return updatedItemOs
    }
}
