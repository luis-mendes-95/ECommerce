/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PayableRepository } from "../payable.repository";
import { CreatePayableDTO } from "../../dto/create-payable.dto";
import { Payable } from "../../entities/payable.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { UpdatePayableDto } from "../../dto/update-payable.dto";
import { randomUUID } from "node:crypto";

@Injectable()
export class PayablesPrismaRepository implements PayableRepository {
    
    constructor(private prisma: PrismaService){}
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async update(id: string, data: UpdatePayableDto): Promise<Payable> {

        const payable = await this.prisma.payable.update({
            where: {id},
            data: {...data}
        })

        return plainToInstance(Payable, payable)
    }

    async create(data: CreatePayableDTO): Promise<Payable> {
        const payable = new Payable()
        Object.assign(payable, {
            ...data
        })

        const newPayable = await this.prisma.payable.create({
            data: {
                id: randomUUID(),
                createdAt: data.createdAt,
                changeMaker: data.changeMaker,
                lastEditted: data.lastEditted,
                amount: data.amount,
                description: data.description,
                status: data.status,
                compra_id: data.compra_id,
                user_id: data.user_id,
                client_id: data.client_id,
                vendaId: data.venda_id,
                osId: data.os_id,
                itemOsId: data.itemOs_id,

            }
        })

        return plainToInstance(Payable, newPayable)
    }

    async findOne(id: string): Promise<Payable> {
        const payable = await this.prisma.payable.findUnique({
            where: { id },
            include: {
                client: true,
                compra: true,
                ItemOs: true,
                Os: true,
                user: true,
                Venda: true
            }
        });
        return plainToInstance(Payable, payable)
    }

    async findAll(group: string): Promise<object | Payable[]> {
        const payables = await this.prisma.payable.findMany()
        return plainToInstance(Payable, payables)
    }
    
}