import { ProductHistory } from "@prisma/client";
import { CreateProdutoHistoryDTO } from "../dto/create-produto-history.dto";

export abstract class ProdutosHistoriesRepository {
    abstract create(data: CreateProdutoHistoryDTO): Promise<ProductHistory>
}