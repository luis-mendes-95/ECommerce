/* eslint-disable prettier/prettier */
import { CreateOsDTO } from "../dto/create-os.dto";
import { UpdateOsDto } from "../dto/update-os.dto";
import { Os } from "../entities/os.entity";

export abstract class OsRepository {
    abstract create(data: CreateOsDTO): Promise<Os> | Os
    abstract findOne(id: string): Promise<Os | undefined> | Os
    abstract update(id: string, data: UpdateOsDto): Promise<Os | undefined> | Os
    abstract findAll(group: string | undefined): Promise<Os[] | object>; 
    abstract delete(id: string): Promise<void> | void;
}