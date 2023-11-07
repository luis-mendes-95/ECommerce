/* eslint-disable prettier/prettier */
import { CreateFileDTO } from "../dto/create-file.dto";
import { UpdateFileDto } from "../dto/update-file.dto";
import { File } from "../entities/file.entity";

export abstract class FileRepository {
    abstract create(data: CreateFileDTO): Promise<File> | File
    abstract findOne(id: string): Promise<File | undefined> | File
    abstract update(id: string, data: UpdateFileDto): Promise<File | undefined> | File
    abstract findAll(group: string | undefined): Promise<File[] | object>; 
    abstract delete(id: string): Promise<void> | void;
}