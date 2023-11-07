/* eslint-disable prettier/prettier */
import { CreateItemOsDTO } from "../dto/create-item-os.dto";
import { UpdateItemOsDto } from "../dto/update-item-os.dto";
import { ItemOs } from "../entities/item-os.entity";

export abstract class ItemOsRepository {
    abstract create(data: CreateItemOsDTO): Promise<ItemOs> | ItemOs
    abstract findOne(id: string): Promise<ItemOs | undefined> | ItemOs
    abstract update(id: string, data: UpdateItemOsDto): Promise<ItemOs | undefined> | ItemOs
    abstract findAll(group: string | undefined): Promise<ItemOs[] | object>; 
    abstract delete(id: string): Promise<void> | void;
}