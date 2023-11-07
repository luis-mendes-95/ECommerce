/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ClienteRepository } from "../clientes.repository";
import { CreateClienteDTO } from "../../dto/create-cliente.dto";
import { Cliente } from "../../entities/cliente.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { UpdateClienteDto } from "../../dto/update-cliente.dto";

@Injectable()
export class ClientesPrismaRepository implements ClienteRepository {
    
    constructor(private prisma: PrismaService){}
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async update(id: string, data: UpdateClienteDto): Promise<Cliente> {
        const cliente = await this.prisma.cliente.update({
            where: {id},
            data: {...data}
        })

        return plainToInstance(Cliente, cliente)
    }

    async create(data: CreateClienteDTO): Promise<Cliente> {
        const cliente = new Cliente()
        Object.assign(cliente, {
            ...data
        })

        const newCliente = await this.prisma.cliente.create({
            data: {...cliente}
        })

        return plainToInstance(Cliente, newCliente)
    }

    async findOne(id: string): Promise<Cliente> {
        const cliente = await this.prisma.cliente.findUnique({
            where: { id },
            include: {
                versions: true,
                receivables: true,
                payables: true,
                os: true,
                _count: true,
                arquivos: true,
                compras: true,
                user: true,
                vendas: true
            }
        });
        return plainToInstance(Cliente, cliente)
    }

    async findAll(group: string): Promise<object | Cliente[]> {
        const clientes = await this.prisma.cliente.findMany()
        return plainToInstance(Cliente, clientes)
    }
    
}