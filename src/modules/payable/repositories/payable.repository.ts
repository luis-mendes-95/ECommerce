/* eslint-disable prettier/prettier */
import { CreatePayableDTO } from "../dto/create-payable.dto";
import { UpdatePayableDto } from "../dto/update-payable.dto";
import { Payable } from "../entities/payable.entity";

export abstract class PayableRepository {
    abstract create(data: CreatePayableDTO): Promise<Payable> | Payable
    abstract findOne(id: string): Promise<Payable | undefined> | Payable
    abstract update(id: string, data: UpdatePayableDto): Promise<Payable | undefined> | Payable
    abstract findAll(group: string | undefined): Promise<Payable[] | object>; 
    abstract delete(id: string): Promise<void> | void;
}