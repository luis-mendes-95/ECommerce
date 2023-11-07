/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ReceivableRepository } from "../receivable.repository";
import { CreateReceivableDTO } from "../../dto/create-receivable.dto";
import { Receivable } from "../../entities/receivable.entity";
import { UpdateReceivableDto } from "../../dto/update-receivable.dto";

@Injectable()
export class ReceivableInMemoryRepository implements ReceivableRepository {

    private database: Receivable[] = []

    async delete(id: string): Promise<void> {
        const receivableIndex = this.database.findIndex((receivable) => receivable.id === id);
        this.database.splice(receivableIndex, 1);
    }
    
    async update(id: string, data: UpdateReceivableDto): Promise<Receivable> {

        const receivableIndex = this.database.findIndex((receivable) => receivable.id === id);
        this.database[receivableIndex] = {
            ...this.database[receivableIndex],
            ...data,
        };

        return this.database[receivableIndex];
    }


    async create(data: CreateReceivableDTO): Promise<Receivable>{
        const newReceivable = new Receivable()
        Object.assign(newReceivable, {
            ...data
        })

        this.database.push(newReceivable)

        return newReceivable
    }
    async findOne(id: string): Promise<Receivable> {
        const receivable = this.database.find(receivable => receivable.id === id)
        return receivable
    }

    private groupby(receivables: Receivable[], key: string) {
        return receivables.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur);
            return acc
        }, {});
    }

    async findAll(group: string): Promise<object | Receivable[]> {
        if(group){
            return this.groupby(this.database, group);
        }
        return this.database
    }

}