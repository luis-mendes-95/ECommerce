/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ItemVendaRepository } from "../item-vendas.repository";
import { CreateItemVendaDTO } from "../../dto/create-item-venda.dto";
import { ItemVenda } from "../../entities/item-venda.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { UpdateItemVendaDto } from "../../dto/update-item-venda.dto";

@Injectable()
export class ItemVendasPrismaRepository implements ItemVendaRepository {
    
    constructor(private prisma: PrismaService){}
    async delete(id: string): Promise<void> {
        await this.prisma.itemVenda.delete({
            where: { id },
        });
    }

    async update(id: string, data: UpdateItemVendaDto): Promise<ItemVenda> {
        const venda = await this.prisma.itemVenda.update({
            where: {id},
            data: {...data}
        })

        return plainToInstance(ItemVenda, venda)
    }

    async create(data: CreateItemVendaDTO): Promise<ItemVenda> {
        const itemVenda = new ItemVenda()
        Object.assign(itemVenda, {
            ...data
        })

        const newItemVenda = await this.prisma.itemVenda.create({
            data: {...itemVenda}
        })

        return plainToInstance(ItemVenda, newItemVenda)
    }

    async findOne(id: string): Promise<ItemVenda> {
        const venda = await this.prisma.itemVenda.findUnique({
            where: { id },
            include: {
                produto: true,
                venda: true
            }
        });
        return plainToInstance(ItemVenda, venda)
    }

    async findAll(group: string): Promise<object | ItemVenda[]> {
        const vendas = await this.prisma.itemVenda.findMany()
        return plainToInstance(ItemVenda, vendas)
    }
    
}