/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InstrucaoRepository } from "../instrucao.repository";
import { CreateInstrucaoDTO } from "../../dto/create-instrucao.dto";
import { Instrucao } from "../../entities/instrucao.entity";
import { UpdateInstrucaoDto } from "../../dto/update-instrucao.dto";

@Injectable()
export class InstrucaoInMemoryRepository implements InstrucaoRepository {

    private database: Instrucao[] = []

    async delete(id: string): Promise<void> {
        const instrucaoIndex = this.database.findIndex((instrucao) => instrucao.id === id);
        this.database.splice(instrucaoIndex, 1);
    }
    
    async update(id: string, data: UpdateInstrucaoDto): Promise<Instrucao> {

        const instrucaoIndex = this.database.findIndex((instrucao) => instrucao.id === id);
        this.database[instrucaoIndex] = {
            ...this.database[instrucaoIndex],
            ...data,
        };

        return this.database[instrucaoIndex];
    }


    async create(data: CreateInstrucaoDTO): Promise<Instrucao>{
        const newInstrucao = new Instrucao()
        Object.assign(newInstrucao, {
            ...data
        })

        this.database.push(newInstrucao)

        return newInstrucao
    }
    async findOne(id: string): Promise<Instrucao> {
        const instrucao = this.database.find(instrucao => instrucao.id === id)
        return instrucao
    }

    private groupby(instrucaos: Instrucao[], key: string) {
        return instrucaos.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur);
            return acc
        }, {});
    }

    async findAll(group: string): Promise<object | Instrucao[]> {
        if(group){
            return this.groupby(this.database, group);
        }
        return this.database
    }

}