/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { OsRepository } from "../os.repository";
import { CreateOsDTO } from "../../dto/create-os.dto";
import { Os } from "../../entities/os.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { UpdateOsDto } from "../../dto/update-os.dto";

@Injectable()
export class OssPrismaRepository implements OsRepository {
    
    constructor(private prisma: PrismaService){}
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async update(id: string, data: UpdateOsDto): Promise<Os> {
        const os = await this.prisma.os.update({
            where: {id},
            data: {...data}
        })

        return plainToInstance(Os, os)
    }

    async create(data: CreateOsDTO): Promise<Os> {
        const os = new Os()
        Object.assign(os, {
            ...data
        })

        const newOs = await this.prisma.os.create({
            data: {...os}
        })

        return plainToInstance(Os, newOs)
    }

    async findOne(id: string): Promise<Os> {
        const os = await this.prisma.os.findUnique({
            where: { id },
            include: {
                versions: true,
                itens: true,
                receivables: true,
                payables: true,
                client: true,
                files: true,
                instrucoes: true,
                venda: true,
                _count: true,
                user: true
            }
        });
        return plainToInstance(Os, os)
    }

    async findAll(group: string): Promise<object | Os[]> {
        const oss = await this.prisma.os.findMany()
        return plainToInstance(Os, oss)
    }
    
}