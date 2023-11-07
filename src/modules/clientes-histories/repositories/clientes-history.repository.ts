/* eslint-disable prettier/prettier */
import { CreateClienteHistoryDTO } from "../dto/create-cliente-history.dto";
import { ClienteHistory } from "../entities/cliente-history.entity";

export abstract class ClienteHistoryRepository {
    abstract create(data: CreateClienteHistoryDTO): Promise<ClienteHistory> | ClienteHistory
}