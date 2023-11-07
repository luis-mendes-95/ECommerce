import { CreateEstoqueHistoryDTO } from "../dto/create-estoque-history.dto";
import { EstoqueHistory } from "../entities/estoque-history.entity";

export abstract class EstoqueHistoryRepository {
    abstract create(data: CreateEstoqueHistoryDTO): Promise<EstoqueHistory> | EstoqueHistory
}