/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateInstrucaoHistoryDTO } from './dto/create-instrucao-history.dto';
import { InstrucaoHistoryRepository } from './repositories/instrucao-history.repository';

@Injectable()
export class InstrucaoHistoryService {
    constructor(private instrucaoHistoryRepository: InstrucaoHistoryRepository){}

    async create(createInstrucaoDTO: CreateInstrucaoHistoryDTO ) {
        await this.instrucaoHistoryRepository.create(createInstrucaoDTO)
        //return instrucao
    }
}
