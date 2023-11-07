/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { OsRepository } from "../os.repository";
import { CreateOsDTO } from "../../dto/create-os.dto";
import { Os } from "../../entities/os.entity";
import { UpdateOsDto } from "../../dto/update-os.dto";

@Injectable()
export class OsInMemoryRepository implements OsRepository {

    private database: Os[] = []

    async delete(id: string): Promise<void> {
        const osIndex = this.database.findIndex((os) => os.id === id);
        this.database.splice(osIndex, 1);
    }
    
    async update(id: string, data: UpdateOsDto): Promise<Os> {
        const osIndex = this.database.findIndex((os) => os.id === id);
        this.database[osIndex] = {
            ...this.database[osIndex],
            ...data,
        };

        return this.database[osIndex];
    }


    async create(data: CreateOsDTO): Promise<Os>{
        const newOs = new Os()
        Object.assign(newOs, {
            ...data
        })

        this.database.push(newOs)

        return newOs
    }
    async findOne(id: string): Promise<Os> {
        const os = this.database.find(os => os.id === id)
        return os
    }

    private groupby(oss: Os[], key: string) {
        return oss.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur);
            return acc
        }, {});
    }

    async findAll(group: string): Promise<object | Os[]> {
        if(group){
            return this.groupby(this.database, group);
        }
        return this.database
    }

}