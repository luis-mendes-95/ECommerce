import { Injectable } from "@nestjs/common";
import { EstoqueRepository } from "../estoque.repository";
import { CreateEstoqueDTO } from "../../dto/create-estoque.dto";
import { Estoque } from "../../entities/estoque.entity";
import { UpdateEstoqueDto } from "../../dto/update-estoque.dto";

@Injectable()
export class EstoqueInMemoryRepository implements EstoqueRepository {

    private database: Estoque[] = []

    async delete(id: string): Promise<void> {
        const estoqueIndex = this.database.findIndex((estoque) => estoque.id === id);
        this.database.splice(estoqueIndex, 1);
    }
    
    async update(id: string, data: UpdateEstoqueDto): Promise<Estoque> {
        const estoqueIndex = this.database.findIndex((estoque) => estoque.id === id);
        this.database[estoqueIndex] = {
            ...this.database[estoqueIndex],
            ...data,
        };

        return this.database[estoqueIndex];
    }


    async create(data: CreateEstoqueDTO): Promise<Estoque>{
        const newEstoque = new Estoque()
        Object.assign(newEstoque, {
            ...data
        })

        this.database.push(newEstoque)

        return newEstoque
    }
    async findOne(id: string): Promise<Estoque> {
        const estoque = this.database.find(estoque => estoque.id === id)
        return estoque
    }

    private groupby(estoques: Estoque[], key: string) {
        return estoques.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur);
            return acc
        }, {});
    }

    async findAll(group: string): Promise<object | Estoque[]> {
        if(group){
            return this.groupby(this.database, group);
        }
        return this.database
    }

}