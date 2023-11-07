/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { VendaHistoryRepository } from "../vendas-history.repository";
import { CreateVendaHistoryDTO } from "../../dto/create-venda-history.dto";
import { VendaHistory } from "../../entities/venda-history.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";

@Injectable()
export class VendasHistoriesPrismaRepository implements VendaHistoryRepository {  
    constructor(private prisma: PrismaService){}


    async create(data: CreateVendaHistoryDTO): Promise<VendaHistory> {
        const venda = new VendaHistory()
        Object.assign(venda, {
            ...data
        })

        const newVenda = await this.prisma.vendaHistory.create({
            data: {...venda}
        })

        return plainToInstance(VendaHistory, newVenda)
    }

    
}