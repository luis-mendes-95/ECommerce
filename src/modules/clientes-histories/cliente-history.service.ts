/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateClienteHistoryDTO } from './dto/create-cliente-history.dto';
import { ClienteHistoryRepository } from './repositories/clientes-history.repository';

@Injectable()
export class ClienteHistoryService {
    constructor(private clienteHistoryRepository: ClienteHistoryRepository){}

    async create(createClienteDTO: CreateClienteHistoryDTO ) {
        const cliente = await this.clienteHistoryRepository.create(createClienteDTO)
        return cliente
    }
}
