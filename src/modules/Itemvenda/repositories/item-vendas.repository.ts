/* eslint-disable prettier/prettier */
import { CreateItemVendaDTO } from "../dto/create-item-venda.dto";
import { UpdateItemVendaDto } from "../dto/update-item-venda.dto";
import { ItemVenda } from "../entities/item-venda.entity";

export abstract class ItemVendaRepository {
    abstract create(data: CreateItemVendaDTO): Promise<ItemVenda> | ItemVenda
    abstract findOne(id: string): Promise<ItemVenda | undefined> | ItemVenda
    abstract update(id: string, data: UpdateItemVendaDto): Promise<ItemVenda | undefined> | ItemVenda
    abstract findAll(group: string | undefined): Promise<ItemVenda[] | object>; 
    abstract delete(id: string): Promise<void> | void;
}