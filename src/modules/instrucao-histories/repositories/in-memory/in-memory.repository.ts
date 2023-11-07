/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InstrucaoHistoryRepository } from "../instrucao-history.repository";
import { CreateInstrucaoHistoryDTO } from "../../dto/create-instrucao-history.dto";
import { InstrucaoHistory } from "../../entities/instrucao-history.entity";

@Injectable()
export class InstrucaoInMemoryRepository implements InstrucaoHistoryRepository {

    private database: InstrucaoHistory[] = []

    async create(data: CreateInstrucaoHistoryDTO): Promise<InstrucaoHistory>{
        const newInstrucao = new InstrucaoHistory()
        Object.assign(newInstrucao, {
            ...data
        })

        this.database.push(newInstrucao)

        return newInstrucao
    }


}