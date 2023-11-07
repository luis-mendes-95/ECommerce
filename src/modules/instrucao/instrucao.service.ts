/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { InstrucaoRepository } from './repositories/instrucao.repository';
import { CreateInstrucaoDTO } from './dto/create-instrucao.dto';
import { UpdateInstrucaoDto } from './dto/update-instrucao.dto';
import { InstrucaoHistoryRepository } from '../instrucao-histories/repositories/instrucao-history.repository';

@Injectable()
export class InstrucaoService {
    constructor(private instrucaoRepository: InstrucaoRepository, private instrucaoHistoryRepository: InstrucaoHistoryRepository){}

    async create(createInstrucaoDTO: CreateInstrucaoDTO ) {
        const instrucao = await this.instrucaoRepository.create(createInstrucaoDTO)
        return instrucao
    }

    async findAll(group: string | undefined) {
        return this.instrucaoRepository.findAll(group)
    }

    async findOne(id: string){
        const findInstrucao = await this.instrucaoRepository.findOne(id)
        return findInstrucao
    }

    async update(id: string, data: UpdateInstrucaoDto){

        let instrucaoToHistory: any = await this.instrucaoRepository.findOne(id)

        const agora = new Date();
        const dia = agora.getDate().toString().padStart(2, '0'); 
        const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); 
        const ano = agora.getFullYear();
        const horas = agora.getHours().toString().padStart(2, '0'); 
        const minutos = agora.getMinutes().toString().padStart(2, '0');
    
        const dataFormatada = `${dia}-${mes}-${ano} ${horas}:${minutos}`;

        instrucaoToHistory.createdAt = dataFormatada
        instrucaoToHistory.lastEditted = dataFormatada
        instrucaoToHistory.id = randomUUID();
        instrucaoToHistory.os= instrucaoToHistory.os.id
        delete instrucaoToHistory.user_id
        delete instrucaoToHistory.versions
        delete instrucaoToHistory.client_id
        delete instrucaoToHistory.osId
        delete instrucaoToHistory.itemOs_id
        delete instrucaoToHistory.os

        instrucaoToHistory.instrucao_id = id

        const updatedInstrucao = await this.instrucaoRepository.update(id, data)

        await this.instrucaoHistoryRepository.create(instrucaoToHistory)

        return updatedInstrucao
    }

    async delete(id: string){
        const updatedInstrucao = await this.instrucaoRepository.delete(id)
        return updatedInstrucao
    }
}
