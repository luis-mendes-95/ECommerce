/* eslint-disable prettier/prettier */
import { CreateClienteDTO } from "../dto/create-cliente.dto";
import { UpdateClienteDto } from "../dto/update-cliente.dto";
import { Cliente } from "../entities/cliente.entity";

export abstract class ClienteRepository {
    abstract create(data: CreateClienteDTO): Promise<Cliente> | Cliente
    abstract findOne(id: string): Promise<Cliente | undefined> | Cliente
    abstract update(id: string, data: UpdateClienteDto): Promise<Cliente | undefined> | Cliente
    abstract findAll(group: string | undefined): Promise<Cliente[] | object>; 
    abstract delete(id: string): Promise<void> | void;
}