/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { EstoqueRepository } from "../estoque.repository";
import { CreateEstoqueDTO } from "../../dto/create-estoque.dto";
import { Estoque } from "../../entities/estoque.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { UpdateEstoqueDto } from "../../dto/update-estoque.dto";

@Injectable()
export class EstoquesPrismaRepository implements EstoqueRepository {
    
    constructor(private prisma: PrismaService){}
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async update(id: string, data: UpdateEstoqueDto): Promise<Estoque> {
        const estoque = await this.prisma.estoque.update({
            where: {id},
            data: {...data}
        })

        return plainToInstance(Estoque, estoque)
    }

    async create(data: CreateEstoqueDTO): Promise<Estoque> {
        const estoque = new Estoque()
        Object.assign(estoque, {
            ...data
        })

        const newEstoque = await this.prisma.estoque.create({
            data: {...estoque}
        })

        return plainToInstance(Estoque, newEstoque)
    }

    async findOne(id: string): Promise<Estoque> {
        const estoque = await this.prisma.estoque.findUnique({
            where: { id },
            include: {
                versions: true,
                produtos: true,
                _count: true,
                user: true
            }
        });
        return plainToInstance(Estoque, estoque)
    }

    async findAll(group: string): Promise<object | Estoque[]> {
        const estoques = await this.prisma.estoque.findMany()
        return plainToInstance(Estoque, estoques)
    }
    
}