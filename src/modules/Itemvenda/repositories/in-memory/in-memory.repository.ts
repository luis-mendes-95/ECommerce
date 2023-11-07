/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ItemVendaRepository } from "../item-vendas.repository";
import { CreateItemVendaDTO } from "../../dto/create-item-venda.dto";
import { ItemVenda } from "../../entities/item-venda.entity";
import { UpdateItemVendaDto } from "../../dto/update-item-venda.dto";

@Injectable()
export class ItemVendaInMemoryRepository implements ItemVendaRepository {

    private database: ItemVenda[] = []

    async delete(id: string): Promise<void> {
        const vendaIndex = this.database.findIndex((venda) => venda.id === id);
        this.database.splice(vendaIndex, 1);
    }
    
    async update(id: string, data: UpdateItemVendaDto): Promise<ItemVenda> {
        const vendaIndex = this.database.findIndex((venda) => venda.id === id);
        this.database[vendaIndex] = {
            ...this.database[vendaIndex],
            ...data,
        };

        return this.database[vendaIndex];
    }


    async create(data: CreateItemVendaDTO): Promise<ItemVenda>{
        const newItemVenda = new ItemVenda()
        Object.assign(newItemVenda, {
            ...data
        })

        this.database.push(newItemVenda)

        return newItemVenda
    }
    async findOne(id: string): Promise<ItemVenda> {
        const venda = this.database.find(venda => venda.id === id)
        return venda
    }

    private groupby(vendas: ItemVenda[], key: string) {
        return vendas.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur);
            return acc
        }, {});
    }

    async findAll(group: string): Promise<object | ItemVenda[]> {
        if(group){
            return this.groupby(this.database, group);
        }
        return this.database
    }

}