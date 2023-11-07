import { Injectable } from "@nestjs/common";
import { EstoqueHistoryRepository } from "../estoque-history.repository";
import { CreateEstoqueHistoryDTO } from "../../dto/create-estoque-history.dto";
import { EstoqueHistory } from "../../entities/estoque-history.entity";

@Injectable()
export class EstoqueInMemoryRepository implements EstoqueHistoryRepository {

    private database: EstoqueHistory[] = []

    async create(data: CreateEstoqueHistoryDTO): Promise<EstoqueHistory>{
        const newEstoque = new EstoqueHistory()
        Object.assign(newEstoque, {
            ...data
        })

        this.database.push(newEstoque)

        return newEstoque
    }


}