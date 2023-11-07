/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ItemOsRepository } from "../item-os.repository";
import { CreateItemOsDTO } from "../../dto/create-item-os.dto";
import { ItemOs } from "../../entities/item-os.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { UpdateItemOsDto } from "../../dto/update-item-os.dto";

@Injectable()
export class ItemOssPrismaRepository implements ItemOsRepository {
    
    constructor(private prisma: PrismaService){}
    async delete(id: string): Promise<void> {
        await this.prisma.itemOs.delete({
            where: { id },
        });
    }

    async update(id: string, data: UpdateItemOsDto): Promise<ItemOs> {
        const venda = await this.prisma.itemOs.update({
            where: {id},
            data: {...data}
        })

        return plainToInstance(ItemOs, venda)
    }

    async create(data: CreateItemOsDTO): Promise<ItemOs> {
        const itemOs = new ItemOs()
        Object.assign(itemOs, {
            ...data
        })

        const newItemOs = await this.prisma.itemOs.create({
            data: {...itemOs}
        })

        return plainToInstance(ItemOs, newItemOs)
    }

    async findOne(id: string): Promise<ItemOs> {
        const venda = await this.prisma.itemOs.findUnique({
            where: { id },
            include: {
                instrucoes: true,
                _count: true,
                files: true,
                os: true,
                payables: true,
                produto: true,
                receivables: true
            }
        });
        return plainToInstance(ItemOs, venda)
    }

    async findAll(group: string): Promise<object | ItemOs[]> {
        const vendas = await this.prisma.itemOs.findMany()
        return plainToInstance(ItemOs, vendas)
    }
    
}