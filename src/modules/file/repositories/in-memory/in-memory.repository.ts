/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { FileRepository } from "../file.repository";
import { CreateFileDTO } from "../../dto/create-file.dto";
import { File } from "../../entities/file.entity";
import { UpdateFileDto } from "../../dto/update-file.dto";

@Injectable()
export class FileInMemoryRepository implements FileRepository {

    private database: File[] = []

    async delete(id: string): Promise<void> {
        const fileIndex = this.database.findIndex((file) => file.id === id);
        this.database.splice(fileIndex, 1);
    }
    
    async update(id: string, data: UpdateFileDto): Promise<File> {

        const fileIndex = this.database.findIndex((file) => file.id === id);
        this.database[fileIndex] = {
            ...this.database[fileIndex],
            ...data,
        };

        return this.database[fileIndex];
    }


    async create(data: CreateFileDTO): Promise<File>{
        const newFile = new File()
        Object.assign(newFile, {
            ...data
        })

        this.database.push(newFile)

        return newFile
    }
    async findOne(id: string): Promise<File> {
        const file = this.database.find(file => file.id === id)
        return file
    }

    private groupby(files: File[], key: string) {
        return files.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur);
            return acc
        }, {});
    }

    async findAll(group: string): Promise<object | File[]> {
        if(group){
            return this.groupby(this.database, group);
        }
        return this.database
    }

}