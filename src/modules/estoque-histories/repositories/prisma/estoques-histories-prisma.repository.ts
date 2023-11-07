import { Injectable } from "@nestjs/common";
import { EstoqueHistoryRepository } from "../estoque-history.repository";
import { CreateEstoqueHistoryDTO } from "../../dto/create-estoque-history.dto";
import { EstoqueHistory } from "../../entities/estoque-history.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";

@Injectable()
export class EstoquesHistoriesPrismaRepository implements EstoqueHistoryRepository {  
    constructor(private prisma: PrismaService){}


    async create(data: CreateEstoqueHistoryDTO): Promise<EstoqueHistory> {
        const estoque = new EstoqueHistory()
        Object.assign(estoque, {
            ...data
        })

        const newEstoque = await this.prisma.estoqueHistory.create({
            data: {...estoque}
        })

        return plainToInstance(EstoqueHistory, newEstoque)
    }

    
}