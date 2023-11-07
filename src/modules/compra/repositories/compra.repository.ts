/* eslint-disable prettier/prettier */
import { CreateCompraDTO } from "../dto/create-compra.dto";
import { UpdateCompraDto } from "../dto/update-compra.dto";
import { Compra } from "../entities/compra.entity";

export abstract class CompraRepository {
    abstract create(data: CreateCompraDTO): Promise<Compra> | Compra
    abstract findOne(id: string): Promise<Compra | undefined> | Compra
    abstract update(id: string, data: UpdateCompraDto): Promise<Compra | undefined> | Compra
    abstract findAll(group: string | undefined): Promise<Compra[] | object>; 
    abstract delete(id: string): Promise<void> | void;
}