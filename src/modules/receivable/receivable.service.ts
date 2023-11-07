/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ReceivableRepository } from './repositories/receivable.repository';
import { CreateReceivableDTO } from './dto/create-receivable.dto';
import { UpdateReceivableDto } from './dto/update-receivable.dto';


@Injectable()
export class ReceivableService {
    constructor(private receivableRepository: ReceivableRepository){}

    async create(createReceivableDTO: CreateReceivableDTO ) {
        const receivable = await this.receivableRepository.create(createReceivableDTO)
        return receivable
    }

    async findAll(group: string | undefined) {
        return this.receivableRepository.findAll(group)
    }

    async findOne(id: string){
        const findReceivable = await this.receivableRepository.findOne(id)
        return findReceivable
    }

    async update(id: string, data: UpdateReceivableDto){

        const updatedReceivable = await this.receivableRepository.update(id, data)

        return updatedReceivable
    }

    async delete(id: string){
        const updatedReceivable = await this.receivableRepository.delete(id)
        return updatedReceivable
    }
}
