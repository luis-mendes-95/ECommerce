/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ItemOsRepository } from "../item-os.repository";
import { CreateItemOsDTO } from "../../dto/create-item-os.dto";
import { ItemOs } from "../../entities/item-os.entity";
import { UpdateItemOsDto } from "../../dto/update-item-os.dto";

@Injectable()
export class ItemOsInMemoryRepository implements ItemOsRepository {

    private database: ItemOs[] = []

    async delete(id: string): Promise<void> {
        const vendaIndex = this.database.findIndex((venda) => venda.id === id);
        this.database.splice(vendaIndex, 1);
    }
    
    async update(id: string, data: UpdateItemOsDto): Promise<ItemOs> {
        const vendaIndex = this.database.findIndex((venda) => venda.id === id);
        this.database[vendaIndex] = {
            ...this.database[vendaIndex],
            ...data,
        };

        return this.database[vendaIndex];
    }


    async create(data: CreateItemOsDTO): Promise<ItemOs>{
        const newItemOs = new ItemOs()
        Object.assign(newItemOs, {
            ...data
        })

        this.database.push(newItemOs)

        return newItemOs
    }
    async findOne(id: string): Promise<ItemOs> {
        const venda = this.database.find(venda => venda.id === id)
        return venda
    }

    private groupby(vendas: ItemOs[], key: string) {
        return vendas.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur);
            return acc
        }, {});
    }

    async findAll(group: string): Promise<object | ItemOs[]> {
        if(group){
            return this.groupby(this.database, group);
        }
        return this.database
    }

}