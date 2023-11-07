/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PayableRepository } from './repositories/payable.repository';
import { CreatePayableDTO } from './dto/create-payable.dto';
import { UpdatePayableDto } from './dto/update-payable.dto';


@Injectable()
export class PayableService {
    constructor(private payableRepository: PayableRepository){}

    async create(createPayableDTO: CreatePayableDTO ) {
        const payable = await this.payableRepository.create(createPayableDTO)
        return payable
    }

    async findAll(group: string | undefined) {
        return this.payableRepository.findAll(group)
    }

    async findOne(id: string){
        const findPayable = await this.payableRepository.findOne(id)
        return findPayable
    }

    async update(id: string, data: UpdatePayableDto){

        const updatedPayable = await this.payableRepository.update(id, data)

        return updatedPayable
    }

    async delete(id: string){
        const updatedPayable = await this.payableRepository.delete(id)
        return updatedPayable
    }
}
