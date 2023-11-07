/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InstrucaoHistoryRepository } from "../instrucao-history.repository";
import { CreateInstrucaoHistoryDTO } from "../../dto/create-instrucao-history.dto";
import { InstrucaoHistory } from "../../entities/instrucao-history.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";

@Injectable()
export class InstrucaosHistoriesPrismaRepository implements InstrucaoHistoryRepository {  
    constructor(private prisma: PrismaService){}


    async create(data: CreateInstrucaoHistoryDTO): Promise<any> {
        const instrucao = new InstrucaoHistory()
        Object.assign(instrucao, {
            ...data
        })

        const newInstrucao = await this.prisma.instrucaoHistory.create({
            data: {...instrucao}
        })

        newInstrucao
    }

    
}