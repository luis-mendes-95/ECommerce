/* eslint-disable prettier/prettier */
import { CreateInstrucaoDTO } from "../dto/create-instrucao.dto";
import { UpdateInstrucaoDto } from "../dto/update-instrucao.dto";
import { Instrucao } from "../entities/instrucao.entity";

export abstract class InstrucaoRepository {
    abstract create(data: CreateInstrucaoDTO): Promise<Instrucao> | Instrucao
    abstract findOne(id: string): Promise<Instrucao | undefined> | Instrucao
    abstract update(id: string, data: UpdateInstrucaoDto): Promise<Instrucao | undefined> | Instrucao
    abstract findAll(group: string | undefined): Promise<Instrucao[] | object>; 
    abstract delete(id: string): Promise<void> | void;
}