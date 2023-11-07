/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutosRepository } from './repositories/produtos.repository';
import { ProdutosHistoriesRepository } from '../produtos-histories/repositories/produto-history.repository';

@Injectable()
export class ProdutosService {

  constructor(private produtosRepository: ProdutosRepository, private produtosHistoriesRepository: ProdutosHistoriesRepository) {}

  async create(createProdutoDto: CreateProdutoDto) {

  const agora = new Date();
  const dia = agora.getDate().toString().padStart(2, '0'); 
  const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); 
  const ano = agora.getFullYear();
  const horas = agora.getHours().toString().padStart(2, '0'); 
  const minutos = agora.getMinutes().toString().padStart(2, '0');

  const dataFormatada = `${dia}-${mes}-${ano} ${horas}:${minutos}`;

  createProdutoDto.createdAt = dataFormatada
  createProdutoDto.lastEditted = dataFormatada
    

    const produto = await this.produtosRepository.create(createProdutoDto)

    return produto
    
  }

  async findAll() {
    const produtos = await this.produtosRepository.findAll();
    return produtos
  }

  async findOne(id: string) {
    const produto = await this.produtosRepository.findOne(id)
    if(!produto){
      throw new NotFoundException("Product not found!")
    }
    return produto
  }

  async update(id: string, updateProductDto: UpdateProdutoDto) {

    let produtoToHistory: any = await this.produtosRepository.findOne(id)

    const agora = new Date();
    const dia = agora.getDate().toString().padStart(2, '0'); 
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); 
    const ano = agora.getFullYear();
    const horas = agora.getHours().toString().padStart(2, '0'); 
    const minutos = agora.getMinutes().toString().padStart(2, '0');

    const dataFormatada = `${dia}-${mes}-${ano} ${horas}:${minutos}`;

    console.log("ESSE É O DADO QUE VOCÊ TEM QUE TRATAR")
    console.log(produtoToHistory)

    const produto = await this.produtosRepository.update(id, updateProductDto)

    produtoToHistory = {
      id: produtoToHistory.id,
      categoria: produtoToHistory.categoria,
      changeMaker: produtoToHistory.changeMaker,
      createdAt: produtoToHistory.createdAt,
      custo: produtoToHistory.custo,
      descricao: produtoToHistory.descricao,
      marca: produtoToHistory.marca,
      modelo: produtoToHistory.modelo,
      cod: produtoToHistory.cod,
      nome: produtoToHistory.nome,
      preco: produtoToHistory.preco,
      qtd: " ",
      imagem_principal: produtoToHistory.imagem_principal,
      imagens: produtoToHistory.imagens,
      product_id: id
    }

    await this.produtosHistoriesRepository.create(produtoToHistory)

    

    if(!produto){
      throw new NotFoundException("Product not found!")
    }
    return produto
  }

  async remove(id: string) {
    await this.produtosRepository.delete(id);
    return
  }
}
