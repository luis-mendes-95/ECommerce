/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CompraRepository } from "../compra.repository";
import { CreateCompraDTO } from "../../dto/create-compra.dto";
import { Compra } from "../../entities/compra.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { UpdateCompraDto } from "../../dto/update-compra.dto";
import { randomUUID } from "node:crypto";

@Injectable()
export class ComprasPrismaRepository implements CompraRepository {
    
    constructor(private prisma: PrismaService){}
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async update(id: string, data: UpdateCompraDto): Promise<Compra> {

        const compra = await this.prisma.compra.update({
            where: {id},
            data: {...data}
        })

        return plainToInstance(Compra, compra)
    }

    async create(data: CreateCompraDTO): Promise<Compra> {
        const compra = new Compra()
        Object.assign(compra, {
            ...data
        })

        const newCompra = await this.prisma.compra.create({
            data: {
                id: randomUUID(),
                createdAt: data.createdAt,
                changeMaker: data.changeMaker,
                lastEditted: data.lastEditted,
                description: data.description,
                supplier_id: data.supplier_id,
                user_id: data.user_id
            }
        })

        return plainToInstance(Compra, newCompra)
    }

    async findOne(id: string): Promise<Compra> {
        const compra = await this.prisma.compra.findUnique({
            where: { id },
            include: {

                _count: true,
                payables: true,
                products: true,
                supplier: true,
                user: true

            }
        });
        return plainToInstance(Compra, compra)
    }

    async findAll(group: string): Promise<object | Compra[]> {
        const compras = await this.prisma.compra.findMany()
        return plainToInstance(Compra, compras)
    }
    
}