import { CreateEstoqueDTO } from "../dto/create-estoque.dto";
import { UpdateEstoqueDto } from "../dto/update-estoque.dto";
import { Estoque } from "../entities/estoque.entity";

export abstract class EstoqueRepository {
    abstract create(data: CreateEstoqueDTO): Promise<Estoque> | Estoque
    abstract findOne(id: string): Promise<Estoque | undefined> | Estoque
    abstract update(id: string, data: UpdateEstoqueDto): Promise<Estoque | undefined> | Estoque
    abstract findAll(group: string | undefined): Promise<Estoque[] | object>; 
    abstract delete(id: string): Promise<void> | void;
}