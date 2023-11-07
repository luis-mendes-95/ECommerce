/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { VendaRepository } from "../vendas.repository";
import { CreateVendaDTO } from "../../dto/create-venda.dto";
import { Venda } from "../../entities/venda.entity";
import { UpdateVendaDto } from "../../dto/update-venda.dto";

@Injectable()
export class VendaInMemoryRepository implements VendaRepository {

    private database: Venda[] = []

    async delete(id: string): Promise<void> {
        const vendaIndex = this.database.findIndex((venda) => venda.id === id);
        this.database.splice(vendaIndex, 1);
    }
    
    async update(id: string, data: UpdateVendaDto): Promise<Venda> {
        const vendaIndex = this.database.findIndex((venda) => venda.id === id);
        this.database[vendaIndex] = {
            ...this.database[vendaIndex],
            ...data,
        };

        return this.database[vendaIndex];
    }


    async create(data: CreateVendaDTO): Promise<Venda>{
        const newVenda = new Venda()
        Object.assign(newVenda, {
            ...data
        })

        this.database.push(newVenda)

        return newVenda
    }
    async findOne(id: string): Promise<Venda> {
        const venda = this.database.find(venda => venda.id === id)
        return venda
    }

    private groupby(vendas: Venda[], key: string) {
        return vendas.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur);
            return acc
        }, {});
    }

    async findAll(group: string): Promise<object | Venda[]> {
        if(group){
            return this.groupby(this.database, group);
        }
        return this.database
    }

}