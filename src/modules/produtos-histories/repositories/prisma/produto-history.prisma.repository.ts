/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ProdutosHistoriesRepository } from "../produto-history.repository";
import { CreateProdutoHistoryDTO } from "../../dto/create-produto-history.dto";
import { ProductHistory } from "../../entities/produto-history.entity";
import { PrismaService } from "src/database/prisma.service";
import { randomUUID } from "node:crypto";


@Injectable()
export class ProdutosHistoriesPrismaRepository implements ProdutosHistoriesRepository{ 
    constructor(private prisma: PrismaService) {}
    async create(data: CreateProdutoHistoryDTO): Promise<ProductHistory> {
        const produtoHistory = new ProductHistory();
        Object.assign(produtoHistory, {
            ...data
        })

        const newProductHistory = await this.prisma.productHistory.create({
            data: {
                id: randomUUID(),
                categoria: produtoHistory.categoria,
                changeMaker: produtoHistory.changeMaker,
                createdAt: produtoHistory.createdAt,
                custo: produtoHistory.custo,
                descricao: produtoHistory.descricao,
                marca: produtoHistory.marca,
                modelo: produtoHistory.modelo,
                cod: produtoHistory.cod,
                nome: produtoHistory.nome,
                preco: produtoHistory.preco,
                qtd: produtoHistory.qtd,
                imagem_principal: produtoHistory.imagem_principal,
                imagens: produtoHistory.imagens,
                product:{
                    connect:
                    {
                        id: produtoHistory.product_id
                    }
                }
            }
        })
        return newProductHistory
    }
    
}