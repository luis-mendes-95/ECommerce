/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateVendaHistoryDTO } from "../../dto/create-venda-history.dto";
import { VendaHistory } from "../../entities/venda-history.entity";
import { VendaHistoryRepository } from "../vendas-history.repository";

@Injectable()
export class VendaInMemoryRepository implements VendaHistoryRepository {

    private database: VendaHistory[] = []

    async create(data: CreateVendaHistoryDTO): Promise<VendaHistory>{
        const newVenda = new VendaHistory()
        Object.assign(newVenda, {
            ...data
        })

        this.database.push(newVenda)

        return newVenda
    }


}