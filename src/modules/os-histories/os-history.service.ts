/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateOsHistoryDTO } from './dto/create-os-history.dto';
import { OsHistoryRepository } from './repositories/os-history.repository';

@Injectable()
export class OsHistoryService {
    constructor(private osHistoryRepository: OsHistoryRepository){}

    async create(createOsDTO: CreateOsHistoryDTO ) {
        const os = await this.osHistoryRepository.create(createOsDTO)
        return os
    }
}
