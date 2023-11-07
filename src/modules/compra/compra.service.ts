/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CompraRepository } from './repositories/compra.repository';
import { CreateCompraDTO } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';

@Injectable()
export class CompraService {
    constructor(private compraRepository: CompraRepository){}

    async create(createCompraDTO: CreateCompraDTO ) {
        const compra = await this.compraRepository.create(createCompraDTO)
        return compra
    }

    async findAll(group: string | undefined) {
        return this.compraRepository.findAll(group)
    }

    async findOne(id: string){
        const findCompra = await this.compraRepository.findOne(id)
        return findCompra
    }

    async update(id: string, data: UpdateCompraDto){
       
        const updatedCompra = await this.compraRepository.update(id, data)

        return updatedCompra
    }

    async delete(id: string){
        const updatedCompra = await this.compraRepository.delete(id)
        return updatedCompra
    }
}
