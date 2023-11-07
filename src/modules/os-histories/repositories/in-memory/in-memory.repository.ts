/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateOsHistoryDTO } from "../../dto/create-os-history.dto";
import { OsHistory } from "../../entities/os-history.entity";
import { OsHistoryRepository } from "../os-history.repository";

@Injectable()
export class OsInMemoryRepository implements OsHistoryRepository {

    private database: OsHistory[] = []

    async create(data: CreateOsHistoryDTO): Promise<OsHistory>{
        const newOs = new OsHistory()
        Object.assign(newOs, {
            ...data
        })

        this.database.push(newOs)

        return newOs
    }


}