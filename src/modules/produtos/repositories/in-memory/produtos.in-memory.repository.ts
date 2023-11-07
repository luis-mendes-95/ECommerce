/* eslint-disable prettier/prettier */
import { plainToInstance } from 'class-transformer';
import { CreateProdutoDto } from '../../dto/create-produto.dto';
import { UpdateProdutoDto } from '../../dto/update-produto.dto';
import { ProdutosRepository } from '../produtos.repository';
import { Injectable } from '@nestjs/common';
import { Produto } from '../../entities/produto.entity';

@Injectable()
export class ProdutosInMemoryRepository implements ProdutosRepository {

  private database: Produto[] = [];

  create(data: CreateProdutoDto): Produto | Promise<Produto> {

    const newProduto = new Produto();

    Object.assign(newProduto, {
      ...data,
    });

    this.database.push(newProduto);

    return plainToInstance(Produto, newProduto);
  }
 
  findAll(): Produto[] | Promise<Produto[]> {
    return this.database
  }
  
  findOne(id: string): Produto | Promise<Produto> {
    const produto = this.database.find((produto) => produto.id === id)
    return plainToInstance(Produto, produto);
  }

  update(id: string, data: UpdateProdutoDto): Produto | Promise<Produto> {
    const produtoIndex = this.database.findIndex(produto => produto.id === id)
    this.database[produtoIndex] = {
      ...this.database[produtoIndex],
      ...data
    }
    return plainToInstance(Produto, this.database[produtoIndex])
  }
  
  delete(id: string): void | Promise<void> {
    const produtoIndex = this.database.findIndex(produto => produto.id === id)
    this.database.splice(produtoIndex, 1)
  }
}
