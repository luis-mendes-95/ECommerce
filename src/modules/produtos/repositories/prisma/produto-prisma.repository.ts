/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ProdutosRepository } from "../produtos.repository";
import { CreateProdutoDto } from "../../dto/create-produto.dto";
import { UpdateProdutoDto } from "../../dto/update-produto.dto";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { Produto } from "../../entities/produto.entity";

@Injectable()
export class ProdutosPrismaRepository implements ProdutosRepository {
    constructor(private prisma: PrismaService){}

    async create(data: CreateProdutoDto): Promise<Produto> {
        const produto = new Produto()
        Object.assign(produto, {
            ...data
        })
    
        const newProduto = await this.prisma.produto.create({
            data: {...produto}
        })

        return plainToInstance(Produto, newProduto)
    }

    async findAll(): Promise<Produto[]> {
        const produtos = await this.prisma.produto.findMany()
        return produtos
    }

    async findOne(id: string): Promise<Produto> {
        const produto = await this.prisma.produto.findUnique({
                where: {id},
                include: {
                    versions: true,
                    qtd: true,
                    _count: true,
                    compras: true,
                    ItemOs: true,
                    ItemVenda: true,
                    user: true
                }
            })
        return plainToInstance(Produto, produto)
        }


    async update(id: string, data: UpdateProdutoDto): Promise<Produto> {
        const produto = await this.prisma.produto.update({
            where: {id},
            data: {...data}
        })
        return plainToInstance(Produto, produto)
    }

    async delete(id: string): Promise<void> {
        await this.prisma.produto.delete(
            {
                where: {id}
            }
        )
    }
    
}