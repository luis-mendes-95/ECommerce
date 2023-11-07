/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InstrucaoRepository } from "../instrucao.repository";
import { CreateInstrucaoDTO } from "../../dto/create-instrucao.dto";
import { Instrucao } from "../../entities/instrucao.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { UpdateInstrucaoDto } from "../../dto/update-instrucao.dto";
import { randomUUID } from "node:crypto";

@Injectable()
export class InstrucaosPrismaRepository implements InstrucaoRepository {
    
    constructor(private prisma: PrismaService){}
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async update(id: string, data: UpdateInstrucaoDto): Promise<Instrucao> {

        const instrucao = await this.prisma.instrucao.update({
            where: {id},
            data: {...data}
        })

        return plainToInstance(Instrucao, instrucao)
    }

    async create(data: CreateInstrucaoDTO): Promise<Instrucao> {
        const instrucao = new Instrucao()
        Object.assign(instrucao, {
            ...data
        })

        const newInstrucao = await this.prisma.instrucao.create({
            data: {
                id: randomUUID(),
                createdAt: data.createdAt,
                changeMaker: data.changeMaker,
                lastEditted: data.lastEditted,
                descricao: data.descricao,
                itemOs_id: data.itemOs_id,
                osId: data.os_id
            }
        })

        return plainToInstance(Instrucao, newInstrucao)
    }

    async findOne(id: string): Promise<Instrucao> {
        const instrucao = await this.prisma.instrucao.findUnique({
            where: { id },
            include: {
                versions: true,
                arquivos: true,
                os: true,
                _count: true,
                itemOs: true
            }
        });
        return plainToInstance(Instrucao, instrucao)
    }

    async findAll(group: string): Promise<object | Instrucao[]> {
        const instrucaos = await this.prisma.instrucao.findMany()
        return plainToInstance(Instrucao, instrucaos)
    }
    
}