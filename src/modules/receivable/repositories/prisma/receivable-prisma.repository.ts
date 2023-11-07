/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ReceivableRepository } from "../receivable.repository";
import { CreateReceivableDTO } from "../../dto/create-receivable.dto";
import { Receivable } from "../../entities/receivable.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { UpdateReceivableDto } from "../../dto/update-receivable.dto";
import { randomUUID } from "node:crypto";

@Injectable()
export class ReceivablesPrismaRepository implements ReceivableRepository {
    
    constructor(private prisma: PrismaService){}
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async update(id: string, data: UpdateReceivableDto): Promise<Receivable> {

        const receivable = await this.prisma.receivable.update({
            where: {id},
            data: {...data}
        })

        return plainToInstance(Receivable, receivable)
    }

    async create(data: CreateReceivableDTO): Promise<Receivable> {
        const receivable = new Receivable()
        Object.assign(receivable, {
            ...data
        })

        const newReceivable = await this.prisma.receivable.create({
            data: {
                id: randomUUID(),
                createdAt: data.createdAt,
                changeMaker: data.changeMaker,
                lastEditted: data.lastEditted,
                amount: data.amount,
                description: data.description,
                status: data.status,
                client_id: data.client_id,
                itemOs_id: data.itemOs_id,
                os_id: data.os_id,
                user_id: data.user_id,
                venda_id: data.venda_id
            }
        })

        return plainToInstance(Receivable, newReceivable)
    }

    async findOne(id: string): Promise<Receivable> {
        const receivable = await this.prisma.receivable.findUnique({
            where: { id },
            include: {
                os: true,
                venda: true,
                client: true,
                itemOs: true,
                user: true
            }
        });
        return plainToInstance(Receivable, receivable)
    }

    async findAll(group: string): Promise<object | Receivable[]> {
        const receivables = await this.prisma.receivable.findMany()
        return plainToInstance(Receivable, receivables)
    }
    
}