/* eslint-disable prettier/prettier */
import { CreateVendaDTO } from "../dto/create-venda.dto";
import { UpdateVendaDto } from "../dto/update-venda.dto";
import { Venda } from "../entities/venda.entity";

export abstract class VendaRepository {
    abstract create(data: CreateVendaDTO): Promise<Venda> | Venda
    abstract findOne(id: string): Promise<Venda | undefined> | Venda
    abstract update(id: string, data: UpdateVendaDto): Promise<Venda | undefined> | Venda
    abstract findAll(group: string | undefined): Promise<Venda[] | object>; 
    abstract delete(id: string): Promise<void> | void;
}