/* eslint-disable prettier/prettier */
import { CreateOsHistoryDTO } from "../dto/create-os-history.dto";
import { OsHistory } from "../entities/os-history.entity";

export abstract class OsHistoryRepository {
    abstract create(data: CreateOsHistoryDTO): Promise<OsHistory> | OsHistory
}