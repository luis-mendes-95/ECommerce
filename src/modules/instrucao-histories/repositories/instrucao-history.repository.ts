/* eslint-disable prettier/prettier */
import { CreateInstrucaoHistoryDTO } from "../dto/create-instrucao-history.dto";
import { InstrucaoHistory } from "../entities/instrucao-history.entity";

export abstract class InstrucaoHistoryRepository {
    abstract create(data: CreateInstrucaoHistoryDTO): Promise<InstrucaoHistory> | InstrucaoHistory
}