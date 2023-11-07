/* eslint-disable prettier/prettier */
import { CreateProdutoDto } from "../dto/create-produto.dto";
import { UpdateProdutoDto } from "../dto/update-produto.dto";
import { Produto } from "../entities/produto.entity";

export abstract class ProdutosRepository {
    abstract create(data: CreateProdutoDto): Promise<Produto> | Produto;
    abstract findAll(): Promise<Produto[]> | Produto[];
    abstract findOne(id: string): Promise<Produto> | Produto;
    abstract update(id: string, data: UpdateProdutoDto): Promise<Produto> | Produto;
    abstract delete(id: string): Promise<void> | void;
}