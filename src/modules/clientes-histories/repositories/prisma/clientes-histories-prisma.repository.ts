/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ClienteHistoryRepository } from "../clientes-history.repository";
import { CreateClienteHistoryDTO } from "../../dto/create-cliente-history.dto";
import { ClienteHistory } from "../../entities/cliente-history.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";

@Injectable()
export class ClientesHistoriesPrismaRepository implements ClienteHistoryRepository {  
    constructor(private prisma: PrismaService){}


    async create(data: CreateClienteHistoryDTO): Promise<ClienteHistory> {
        const cliente = new ClienteHistory()
        Object.assign(cliente, {
            ...data
        })

        const newCliente = await this.prisma.clienteHistory.create({
            data: {...cliente}
        })

        return plainToInstance(ClienteHistory, newCliente)
    }

    
}