/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateClienteDTO } from './dto/create-cliente.dto';
import { ClienteRepository } from './repositories/clientes.repository';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteHistoryRepository } from '../clientes-histories/repositories/clientes-history.repository';
import { randomUUID } from 'crypto';

@Injectable()
export class ClienteService {
    constructor(private clienteRepository: ClienteRepository, private clienteHistoryRepository: ClienteHistoryRepository){}

    async create(createClienteDTO: CreateClienteDTO ) {
        const cliente = await this.clienteRepository.create(createClienteDTO)
        return cliente
    }

    async findAll(group: string | undefined) {
        return this.clienteRepository.findAll(group)
    }

    async findOne(id: string){
        const findCliente = await this.clienteRepository.findOne(id)
        return findCliente
    }

    async update(id: string, data: UpdateClienteDto){

        let clienteToHistory: any = await this.clienteRepository.findOne(id)

        const agora = new Date();
        const dia = agora.getDate().toString().padStart(2, '0'); 
        const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); 
        const ano = agora.getFullYear();
        const horas = agora.getHours().toString().padStart(2, '0'); 
        const minutos = agora.getMinutes().toString().padStart(2, '0');
    
        const dataFormatada = `${dia}-${mes}-${ano} ${horas}:${minutos}`;

        clienteToHistory.createdAt = dataFormatada
        clienteToHistory.lastEditted = dataFormatada
        clienteToHistory.id = randomUUID();
        delete clienteToHistory.user_id
        delete clienteToHistory.versions

        clienteToHistory.cliente_id = id

        const updatedCliente = await this.clienteRepository.update(id, data)

        await this.clienteHistoryRepository.create(clienteToHistory)

        return updatedCliente
    }

    async delete(id: string){
        const updatedCliente = await this.clienteRepository.delete(id)
        return updatedCliente
    }
}
