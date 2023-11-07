/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateClienteHistoryDTO } from "../../dto/create-cliente-history.dto";
import { ClienteHistory } from "../../entities/cliente-history.entity";
import { ClienteHistoryRepository } from "../clientes-history.repository";

@Injectable()
export class ClienteInMemoryRepository implements ClienteHistoryRepository {

    private database: ClienteHistory[] = []

    async create(data: CreateClienteHistoryDTO): Promise<ClienteHistory>{
        const newCliente = new ClienteHistory()
        Object.assign(newCliente, {
            ...data
        })

        this.database.push(newCliente)

        return newCliente
    }


}