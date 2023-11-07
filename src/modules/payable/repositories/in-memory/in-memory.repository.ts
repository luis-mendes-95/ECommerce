/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PayableRepository } from "../payable.repository";
import { CreatePayableDTO } from "../../dto/create-payable.dto";
import { Payable } from "../../entities/payable.entity";
import { UpdatePayableDto } from "../../dto/update-payable.dto";

@Injectable()
export class PayableInMemoryRepository implements PayableRepository {

    private database: Payable[] = []

    async delete(id: string): Promise<void> {
        const payableIndex = this.database.findIndex((payable) => payable.id === id);
        this.database.splice(payableIndex, 1);
    }
    
    async update(id: string, data: UpdatePayableDto): Promise<Payable> {

        const payableIndex = this.database.findIndex((payable) => payable.id === id);
        this.database[payableIndex] = {
            ...this.database[payableIndex],
            ...data,
        };

        return this.database[payableIndex];
    }


    async create(data: CreatePayableDTO): Promise<Payable>{
        const newPayable = new Payable()
        Object.assign(newPayable, {
            ...data
        })

        this.database.push(newPayable)

        return newPayable
    }
    async findOne(id: string): Promise<Payable> {
        const payable = this.database.find(payable => payable.id === id)
        return payable
    }

    private groupby(payables: Payable[], key: string) {
        return payables.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur);
            return acc
        }, {});
    }

    async findAll(group: string): Promise<object | Payable[]> {
        if(group){
            return this.groupby(this.database, group);
        }
        return this.database
    }

}