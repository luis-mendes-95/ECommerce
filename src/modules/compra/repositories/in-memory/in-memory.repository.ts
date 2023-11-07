/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CompraRepository } from "../compra.repository";
import { CreateCompraDTO } from "../../dto/create-compra.dto";
import { Compra } from "../../entities/compra.entity";
import { UpdateCompraDto } from "../../dto/update-compra.dto";

@Injectable()
export class CompraInMemoryRepository implements CompraRepository {

    private database: Compra[] = []

    async delete(id: string): Promise<void> {
        const compraIndex = this.database.findIndex((compra) => compra.id === id);
        this.database.splice(compraIndex, 1);
    }
    
    async update(id: string, data: UpdateCompraDto): Promise<Compra> {

        const compraIndex = this.database.findIndex((compra) => compra.id === id);
        this.database[compraIndex] = {
            ...this.database[compraIndex],
            ...data,
        };

        return this.database[compraIndex];
    }


    async create(data: CreateCompraDTO): Promise<Compra>{
        const newCompra = new Compra()
        Object.assign(newCompra, {
            ...data
        })

        this.database.push(newCompra)

        return newCompra
    }
    async findOne(id: string): Promise<Compra> {
        const compra = this.database.find(compra => compra.id === id)
        return compra
    }

    private groupby(compras: Compra[], key: string) {
        return compras.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur);
            return acc
        }, {});
    }

    async findAll(group: string): Promise<object | Compra[]> {
        if(group){
            return this.groupby(this.database, group);
        }
        return this.database
    }

}