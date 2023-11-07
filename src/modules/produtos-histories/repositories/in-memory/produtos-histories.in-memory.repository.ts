/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateProdutoHistoryDTO } from "../../dto/create-produto-history.dto";
import { ProductHistory } from "../../entities/produto-history.entity";
import { ProdutosHistoriesRepository } from "../produto-history.repository";

@Injectable()
export class ProdutosHistoriesInMemoryRepository implements ProdutosHistoriesRepository {
    private database: ProductHistory[] = []

    async create(data: CreateProdutoHistoryDTO): Promise<ProductHistory> {
        const newProductHistory = new ProductHistory();
        Object.assign(newProductHistory, {
            ...data
        })

        this.database.push(newProductHistory);
        return newProductHistory;
    }
    
}