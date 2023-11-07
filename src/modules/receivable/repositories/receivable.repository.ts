/* eslint-disable prettier/prettier */
import { CreateReceivableDTO } from "../dto/create-receivable.dto";
import { UpdateReceivableDto } from "../dto/update-receivable.dto";
import { Receivable } from "../entities/receivable.entity";

export abstract class ReceivableRepository {
    abstract create(data: CreateReceivableDTO): Promise<Receivable> | Receivable
    abstract findOne(id: string): Promise<Receivable | undefined> | Receivable
    abstract update(id: string, data: UpdateReceivableDto): Promise<Receivable | undefined> | Receivable
    abstract findAll(group: string | undefined): Promise<Receivable[] | object>; 
    abstract delete(id: string): Promise<void> | void;
}