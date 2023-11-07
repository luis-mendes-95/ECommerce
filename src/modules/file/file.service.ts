/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { FileRepository } from './repositories/file.repository';
import { CreateFileDTO } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

@Injectable()
export class FileService {
    constructor(private fileRepository: FileRepository){}

    async create(createFileDTO: CreateFileDTO ) {
        const file = await this.fileRepository.create(createFileDTO)
        return file
    }

    async findAll(group: string | undefined) {
        return this.fileRepository.findAll(group)
    }

    async findOne(id: string){
        const findFile = await this.fileRepository.findOne(id)
        return findFile
    }

    async update(id: string, data: UpdateFileDto){

        const updatedFile = await this.fileRepository.update(id, data)

        return updatedFile
    }

    async delete(id: string){
        const updatedFile = await this.fileRepository.delete(id)
        return updatedFile
    }
}
