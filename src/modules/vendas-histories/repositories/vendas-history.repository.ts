/* eslint-disable prettier/prettier */
import { CreateVendaHistoryDTO } from "../dto/create-venda-history.dto";
import { VendaHistory } from "../entities/venda-history.entity";

export abstract class VendaHistoryRepository {
    abstract create(data: CreateVendaHistoryDTO): Promise<VendaHistory> | VendaHistory
}