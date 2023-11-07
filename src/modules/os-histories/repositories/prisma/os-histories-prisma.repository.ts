/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { OsHistoryRepository } from "../os-history.repository";
import { CreateOsHistoryDTO } from "../../dto/create-os-history.dto";
import { OsHistory } from "../../entities/os-history.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";

@Injectable()
export class OssHistoriesPrismaRepository implements OsHistoryRepository {  
    constructor(private prisma: PrismaService){}


    async create(data: CreateOsHistoryDTO): Promise<OsHistory> {
        const os = new OsHistory()
        Object.assign(os, {
            ...data
        })

        const newOs = await this.prisma.osHistory.create({
            data: {...os}
        })

        return plainToInstance(OsHistory, newOs)
    }

    
}