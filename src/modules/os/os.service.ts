/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateOsDTO } from './dto/create-os.dto';
import { OsRepository } from './repositories/os.repository';
import { UpdateOsDto } from './dto/update-os.dto';
import { randomUUID } from 'crypto';
import { OsHistoryRepository } from '../os-histories/repositories/os-history.repository';

@Injectable()
export class OsService {
    constructor(private osRepository: OsRepository, private osHistoryRepository: OsHistoryRepository){}

    async create(createOsDTO: CreateOsDTO ) {
        const os = await this.osRepository.create(createOsDTO)
        return os
    }

    async findAll(group: string | undefined) {
        return this.osRepository.findAll(group)
    }

    async findOne(id: string){
        const findOs = await this.osRepository.findOne(id)
        return findOs
    }

    async update(id: string, data: UpdateOsDto){

        let osToHistory: any = await this.osRepository.findOne(id)

        const agora = new Date();
        const dia = agora.getDate().toString().padStart(2, '0'); 
        const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); 
        const ano = agora.getFullYear();
        const horas = agora.getHours().toString().padStart(2, '0'); 
        const minutos = agora.getMinutes().toString().padStart(2, '0');
    
        const dataFormatada = `${dia}-${mes}-${ano} ${horas}:${minutos}`;

        osToHistory.createdAt = dataFormatada
        osToHistory.lastEditted = dataFormatada
        osToHistory.id = randomUUID();
        delete osToHistory.user_id
        osToHistory.client = osToHistory.client.nome_razao_social
        delete osToHistory.venda_id
        delete osToHistory.venda
        delete osToHistory.client_id
        delete osToHistory.versions

        osToHistory.os_id = id

        const updatedOs = await this.osRepository.update(id, data)

        await this.osHistoryRepository.create(osToHistory)

        return updatedOs
    }

    async delete(id: string){
        const updatedOs = await this.osRepository.delete(id)
        return updatedOs
    }
}
