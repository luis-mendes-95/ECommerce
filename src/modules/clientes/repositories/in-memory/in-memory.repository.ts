/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ClienteRepository } from "../clientes.repository";
import { CreateClienteDTO } from "../../dto/create-cliente.dto";
import { Cliente } from "../../entities/cliente.entity";
import { UpdateClienteDto } from "../../dto/update-cliente.dto";

@Injectable()
export class ClienteInMemoryRepository implements ClienteRepository {

    private database: Cliente[] = []

    async delete(id: string): Promise<void> {
        const clienteIndex = this.database.findIndex((cliente) => cliente.id === id);
        this.database.splice(clienteIndex, 1);
    }
    
    async update(id: string, data: UpdateClienteDto): Promise<Cliente> {
        const clienteIndex = this.database.findIndex((cliente) => cliente.id === id);
        this.database[clienteIndex] = {
            ...this.database[clienteIndex],
            ...data,
        };

        return this.database[clienteIndex];
    }


    async create(data: CreateClienteDTO): Promise<Cliente>{
        const newCliente = new Cliente()
        Object.assign(newCliente, {
            ...data
        })

        this.database.push(newCliente)

        return newCliente
    }
    async findOne(id: string): Promise<Cliente> {
        const cliente = this.database.find(cliente => cliente.id === id)
        return cliente
    }

    private groupby(clientes: Cliente[], key: string) {
        return clientes.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur);
            return acc
        }, {});
    }

    async findAll(group: string): Promise<object | Cliente[]> {
        if(group){
            return this.groupby(this.database, group);
        }
        return this.database
    }

}