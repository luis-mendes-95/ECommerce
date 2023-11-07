/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { VendaRepository } from "../vendas.repository";
import { CreateVendaDTO } from "../../dto/create-venda.dto";
import { Venda } from "../../entities/venda.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { UpdateVendaDto } from "../../dto/update-venda.dto";

@Injectable()
export class VendasPrismaRepository implements VendaRepository {
    
    constructor(private prisma: PrismaService){}
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async update(id: string, data: UpdateVendaDto): Promise<Venda> {
        const venda = await this.prisma.venda.update({
            where: {id},
            data: {...data}
        })

        return plainToInstance(Venda, venda)
    }

    async create(data: CreateVendaDTO): Promise<Venda> {
        const venda = new Venda()
        Object.assign(venda, {
            ...data
        })

        const newVenda = await this.prisma.venda.create({
            data: {...venda}
        })

        return plainToInstance(Venda, newVenda)
    }

    async findOne(id: string): Promise<Venda> {
        const venda = await this.prisma.venda.findUnique({
            where: { id },
            include: {
                versions: true,
                itens: true,
                receivables: true,
                payables: true,
                os: true,
                client: true,
                user: true,
            }
        });
        return plainToInstance(Venda, venda)
    }

    async findAll(group: string): Promise<object | Venda[]> {
        const vendas = await this.prisma.venda.findMany()
        return plainToInstance(Venda, vendas)
    }
    
}